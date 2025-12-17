import json
import uuid
import time
import random

# ================= CONFIGURATION =================
# Adjust these numbers to make the file truly HUMONGOUS
NUM_SUITES = 50          # Number of top-level application test suites
MIN_TESTS_PER_SUITE = 5  # Min tests per suite
MAX_TESTS_PER_SUITE = 20 # Max tests per suite
MIN_ASSERTIONS = 5       # Min assertions per test
MAX_ASSERTIONS = 15      # Max assertions per test
OUTPUT_FILENAME = "humongous_test_case.json"
# =================================================

APP_NAMES = [
    "uber-item-reactor-stream", "indigo-inventory-sync", "supply-chain-monitor",
    "price-optimization-engine", "log-aggregator-service", "payment-gateway-proxy",
    "notification-dispatcher", "search-indexer-worker"
]

TOPICS = [
    "uber-indigo-input", "uber-siv-outbound", "store-item-updates",
    "global-inventory-delta", "clickstream-events", "transaction-logs"
]

KEYSPACES = ["store_us", "inventory_global", "user_profiles", "archived_logs"]
TABLES = ["siv_data", "item_attributes", "transaction_history", "audit_trail"]

def generate_assertion(index):
    """Generates a random assertion object based on schema."""
    assertion_type = random.choice(["log", "kafka", "cassandra"])
    base_id = f"assertion-{index}-{uuid.uuid4().hex[:6]}"
    
    # Common fields
    baseline_val = f"sample_data_baseline_{random.randint(1000,9999)}"
    undertest_val = baseline_val # Usually they match in happy paths
    
    if assertion_type == "log":
        return {
            "type": "log",
            "id": f"{base_id}-log",
            "baseline": f"Process finished with code 0: {baseline_val}",
            "underTest": f"Process finished with code 0: {undertest_val}",
            "regex": "Process finished.*"
        }
    elif assertion_type == "kafka":
        return {
            "type": "kafka",
            "id": f"{base_id}-kafka",
            "baseline": f"event=UPDATE,val={baseline_val}",
            "underTest": f"event=UPDATE,val={undertest_val}",
            "topic": random.choice(TOPICS),
            "key": str(uuid.uuid4())
        }
    elif assertion_type == "cassandra":
        return {
            "type": "cassandra",
            "id": f"{base_id}-cassandra",
            "baseline": f"col_val={baseline_val}",
            "underTest": f"col_val={undertest_val}",
            "keyspace": random.choice(KEYSPACES),
            "table": random.choice(TABLES),
            "column": "blob_data_column"
        }

def generate_test_case(suite_index, test_index):
    """Generates a single test object."""
    num_assertions = random.randint(MIN_ASSERTIONS, MAX_ASSERTIONS)
    return {
        "id": f"suite_{suite_index:03d}_test_{test_index:03d}",
        "inputKafkaTopic": random.choice(TOPICS),
        "assertions": [generate_assertion(i) for i in range(num_assertions)]
    }

def generate_suite(index):
    """Generates a full test suite object."""
    app_name = random.choice(APP_NAMES)
    num_tests = random.randint(MIN_TESTS_PER_SUITE, MAX_TESTS_PER_SUITE)
    
    return {
        "uuid": str(uuid.uuid4()),
        "time": int(time.time() * 1000) + random.randint(-100000, 100000),
        "appName": app_name,
        "dockerImageURL": {
            "baseline": f"docker.repo.com/{app_name}:1.0.{random.randint(100,200)}",
            "underTest": f"docker.repo.com/{app_name}:1.0.{random.randint(201,300)}"
        },
        "tests": [generate_test_case(index, i) for i in range(num_tests)]
    }

def main():
    print(f"Generating {NUM_SUITES} suites...")
    print(f"Est. Total Tests: ~{NUM_SUITES * ((MIN_TESTS_PER_SUITE + MAX_TESTS_PER_SUITE)//2)}")
    
    data = []
    for i in range(NUM_SUITES):
        data.append(generate_suite(i + 1))
        if i % 10 == 0:
            print(f"Generated suite {i+1}...")

    print(f"Writing to {OUTPUT_FILENAME}...")
    with open(OUTPUT_FILENAME, 'w') as f:
        json.dump(data, f, indent=None) # Set indent=2 for pretty print, None for smaller size
    
    print("Done! File generated.")

if __name__ == "__main__":
    main()