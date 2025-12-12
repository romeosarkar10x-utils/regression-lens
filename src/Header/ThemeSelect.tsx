import {
    Select,
    SelectItem,
    SelectGroup,
    SelectContent,
    SelectValue,
    SelectLabel,
    SelectTrigger,
} from "@/components/ui/select";

import { setTheme, themes } from "@/themes";

export default function ThemeSelect() {
    return (
        <Select
            onValueChange={(value) => {
                const themeID = value as (typeof themes)[number]["id"];
                setTheme(themeID);
            }}
        >
            <SelectTrigger className="w-[8em]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Themes</SelectLabel>
                    {themes.map((theme) => (
                        <SelectItem key={theme.id} value={theme.id}>
                            {theme.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
