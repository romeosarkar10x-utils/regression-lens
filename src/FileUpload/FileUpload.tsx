import type React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, X, CheckCircle2 } from "lucide-react";
// import type { FileType } from "lucide-react";

interface FileUploadProps {
    onFileSelect?: (file: File) => void;
    onParse?: (file: File) => void;
    accept?: string;
    maxSize?: number; // in MB
    className?: string;
}

export default function FileUpload({
    onFileSelect,
    onParse,
    accept,
    maxSize = 10,
    className,
}: FileUploadProps) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const validateFile = (file: File): boolean => {
        if (maxSize && file.size > maxSize * 1024 * 1024) {
            setError(`File size must be less than ${maxSize}MB`);
            return false;
        }
        setError(null);
        return true;
    };

    const handleFileChange = (file: File | null) => {
        if (!file) return;

        if (validateFile(file)) {
            setIsUploading(true);
            setTimeout(() => {
                setSelectedFile(file);
                setIsUploading(false);
                onFileSelect?.(file);
            }, 800);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        handleFileChange(file);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0] || null;
        handleFileChange(file);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setError(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return (
            Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
        );
    };

    return (
        <div className={className}>
            <input
                ref={fileInputRef}
                type="file"
                accept={accept}
                onChange={handleInputChange}
                className="hidden"
                aria-label="File upload input"
            />

            {!selectedFile && !isUploading ? (
                <Card
                    className={`relative cursor-pointer overflow-hidden border-2 border-dashed transition-all duration-300 ${
                        isDragging
                            ? "scale-[1.02] border-primary bg-primary/10 shadow-lg"
                            : "border-border hover:border-primary hover:shadow-md"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleClick}
                >
                    <div
                        className={`absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 transition-opacity duration-300 ${isDragging ? "opacity-100" : "opacity-0"}`}
                    />

                    <div className="relative flex flex-col items-center justify-center p-12 text-center">
                        <div
                            className={`relative mb-6 rounded-full bg-primary/10 p-6 transition-all duration-300 ${isDragging ? "scale-110 bg-primary/20" : ""}`}
                        >
                            <Upload
                                className={`h-10 w-10 text-primary transition-transform duration-300 ${isDragging ? "scale-110" : ""}`}
                            />
                            <div
                                className={`absolute inset-0 rounded-full border-4 border-primary/30 transition-all duration-500 ${isDragging ? "scale-150 opacity-0" : "scale-100 opacity-100"}`}
                            />
                        </div>

                        <h3 className="mb-2 text-2xl font-bold text-foreground">
                            Drop your file here
                        </h3>
                        <p className="mb-6 max-w-sm text-base text-muted-foreground">
                            or click to browse from your computer
                        </p>

                        <Button
                            type="button"
                            size="lg"
                            className="font-semibold"
                        >
                            Choose File
                        </Button>

                        {maxSize && (
                            <p className="mt-6 text-sm font-medium text-muted-foreground">
                                Max file size: {maxSize}MB
                            </p>
                        )}
                    </div>
                </Card>
            ) : isUploading ? (
                <Card className="border-2 border-primary/50 bg-primary/5 p-8">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="relative">
                            <div className="h-16 w-16 rounded-full border-4 border-primary/20" />
                            <div className="absolute inset-0 h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                        </div>
                        <p className="text-lg font-semibold text-foreground">
                            Uploading file...
                        </p>
                    </div>
                </Card>
            ) : (
                <Card className="animate-in border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-6 shadow-md duration-500 fade-in slide-in-from-bottom-4">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex min-w-0 flex-1 items-center gap-4">
                            <div className="shrink-0 rounded-xl bg-primary/10 p-3">
                                <CheckCircle2 className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex min-w-0 flex-1 flex-col">
                                <span className="truncate text-base font-semibold text-foreground">
                                    {selectedFile?.name}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    {selectedFile &&
                                        formatFileSize(selectedFile.size)}
                                </span>
                            </div>
                        </div>
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={handleRemoveFile}
                            aria-label="Remove file"
                            className="shrink-0 transition-colors hover:bg-destructive/10 hover:text-destructive"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="mt-4 border-t border-border/50 pt-4">
                        <Button
                            type="button"
                            onClick={() =>
                                selectedFile && onParse?.(selectedFile)
                            }
                            className="w-full font-semibold"
                            size="lg"
                        >
                            Parse
                        </Button>
                    </div>
                </Card>
            )}

            {error && (
                <div className="mt-3 animate-in rounded-lg border border-destructive/20 bg-destructive/10 p-3 duration-300 fade-in slide-in-from-top-2">
                    <p className="text-sm font-medium text-destructive">
                        {error}
                    </p>
                </div>
            )}
        </div>
    );
}
