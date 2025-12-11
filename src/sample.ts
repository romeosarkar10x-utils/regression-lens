const text0 = `# Project Orion: Backend Architecture Documentation
# Version: 1.0.0
# Date: 2023-10-15
# Author: DevTeam Alpha

## 1. Introduction
Project Orion is a high-performance distributed system designed to handle
real-time data processing for IoT sensors. The system is built using
a microservices architecture to ensure scalability and fault tolerance.

The core objective is to minimize latency while maintaining data integrity
across geographically distributed server nodes.

## 2. Technology Stack
The following technologies are currently in use:
- Language: Python 3.9
- Framework: Django 4.0
- Database: PostgreSQL 13 (Primary), Redis 6 (Caching)
- Message Broker: RabbitMQ
- Deployment: Docker Swarm

## 3. Core Components

### 3.1 Ingestion Service
The Ingestion Service acts as the entry point for all sensor data.
It validates the payload signature and pushes valid messages to the queue.
Capacity: Handles up to 10,000 requests per second.

### 3.2 Processing Unit
Consumes messages from RabbitMQ.
Performs three distinct steps:
1. Normalization of temperature data.
2. Anomaly detection using a simple threshold algorithm.
3. Archival to the cold storage bucket.

### 3.3 Notification Service
Triggers alerts via Email or SMS if a critical anomaly is detected.
Current provider: Twilio.

## 4. Installation & Setup
To run this project locally, follow these steps:

1. Clone the repository.
2. Create a virtual environment: \`python -m venv venv\`.
3. Install dependencies: \`pip install -r requirements.txt\`.
4. Set environment variables in \`.env\`.
5. Run migrations: \`python manage.py migrate\`.
6. Start the server: \`python manage.py runserver\`.

## 5. Future Roadmap
- [ ] Migrate from Docker Swarm to Kubernetes.
- [ ] Implement GraphQL API for frontend dashboards.
- [ ] Add support for MQTT protocol.
- [ ] Optimize database indexing for time-series queries.

## 6. License
This project is licensed under the MIT License.
Copyright (c) 2023 Orion Corp.
`;

const text1 = `# Project Orion: Backend Architecture Documentation
# Version: 1.2.0 (Updated)
# Date: 2024-01-20
# Author: DevTeam Alpha & Beta

## 1. Introduction
Project Orion is a high-performance distributed system designed to handle
real-time data processing for industrial IoT sensors. The system is built
using a microservices architecture to ensure scalability, fault tolerance,
and ease of maintenance.

The core objective is to minimize latency while ensuring strict data integrity
across geographically distributed server nodes (US, EU, and AP regions).

## 2. Technology Stack
The following technologies are currently in use:
- Language: Python 3.11 (Upgraded from 3.9)
- Framework: FastAPI (Migrated from Django)
- Database: PostgreSQL 15 (Primary), Redis 7 (Caching)
- Message Broker: Apache Kafka
- Deployment: Kubernetes

## 3. Core Components

### 3.1 Ingestion Service
The Ingestion Service acts as the entry point for all sensor data.
It validates the payload signature, checks for duplicate packets,
and pushes valid messages to the Kafka topic.
Capacity: Handles up to 50,000 requests per second.

### 3.2 Processing Unit
Consumes messages from the 'sensor-events' topic.
Performs distinct steps:
1. Normalization of temperature and pressure data.
2. Anomaly detection using a Machine Learning model (v2).
   (Note: The legacy threshold algorithm has been deprecated).
3. Archival to the cold storage bucket (S3 Glacier).

### 3.3 Notification Service
Triggers alerts via Email, SMS, or Slack Webhooks if a critical anomaly is detected.
Current provider: AWS SNS.

## 4. Installation & Setup
To run this project locally, ensure you have Docker Desktop installed.

1. Clone the repository.
2. Copy \`.env.example\` to \`.env\`.
3. Run the container stack: \`docker-compose up -d\`.
4. Access the API docs at \`http://localhost:8000/docs\`.

## 5. Future Roadmap
- [x] Migrate from Docker Swarm to Kubernetes. (Completed)
- [x] Implement GraphQL API for frontend dashboards. (Completed)
- [ ] Add support for CoAP protocol alongside MQTT.
- [ ] Optimize database indexing for time-series queries.
- [ ] Implement Role-Based Access Control (RBAC).

## 6. License
This project is licensed under the MIT License.
Copyright (c) 2024 Orion Corp.
`;

export { text0, text1 };
