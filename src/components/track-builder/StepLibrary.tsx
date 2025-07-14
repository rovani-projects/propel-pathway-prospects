
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Copy,
  Edit,
  FileText,
  Filter,
  Info,
  Search,
  Shield,
  Trash2,
  UploadIcon
} from "lucide-react";
import { useState } from "react";

export const StepLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const stepTypes = [
    { id: "form", label: "Form", icon: FileText, color: "bg-blue-500" },
    { id: "upload", label: "Upload", icon: UploadIcon, color: "bg-green-500" },
    { id: "manual", label: "Manual", icon: Shield, color: "bg-orange-500" },
    { id: "calendly", label: "Meeting", icon: Calendar, color: "bg-purple-500" },
    { id: "informational", label: "Info", icon: Info, color: "bg-gray-500" }
  ];

  const stepLibrary = [
    {
      id: "bg-check",
      name: "Background Check",
      type: "manual",
      description: "Comprehensive background verification process",
      statuses: ["Initial screening completed", "References contacted", "Awaiting final verification"],
      usedIn: ["Medical Assistant", "Sterile Processing Tech"],
      lastModified: "2024-01-15"
    },
    {
      id: "app-form",
      name: "Application Submission",
      type: "form",
      description: "Initial application form with basic information",
      statuses: ["Form submitted", "Under review", "Additional info required"],
      usedIn: ["Medical Assistant", "Sterile Processing Tech", "Default Application Track"],
      lastModified: "2024-01-12"
    },
    {
      id: "doc-upload",
      name: "Document Upload",
      type: "upload",
      description: "Upload required certification documents",
      statuses: ["Documents uploaded", "Under review", "Additional documents needed"],
      usedIn: ["Medical Assistant", "Sterile Processing Tech"],
      lastModified: "2024-01-10"
    },
    {
      id: "interview",
      name: "Interview Scheduling",
      type: "calendly",
      description: "Schedule and conduct applicant interview",
      statuses: ["Interview scheduled", "Interview completed", "Follow-up required"],
      usedIn: ["Medical Assistant", "Sterile Processing Tech"],
      lastModified: "2024-01-08"
    },
    {
      id: "orientation",
      name: "Orientation Information",
      type: "informational",
      description: "Provide orientation details and expectations",
      statuses: ["Information sent", "Acknowledged"],
      usedIn: ["Medical Assistant"],
      lastModified: "2024-01-05"
    }
  ];

  const getStepTypeInfo = (type: string) => {
    return stepTypes.find(t => t.id === type) || stepTypes[0];
  };

  const filteredSteps = stepLibrary.filter(step =>
    step.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    step.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search steps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Step Type Legend */}
      <Card className="pt-4 bg-slate-50">
        <CardContent className="flex flex-row gap-x-10">
          <h2 className="text-lg">Step Types</h2>
          <div className="flex flex-wrap gap-3">
            {stepTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.id} className="flex items-center space-x-2">
                  <div className={`w-6 h-6 ${type.color} rounded flex items-center justify-center`}>
                    <Icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">{type.label}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Steps Grid */}
      <div className="grid gap-6">
        {filteredSteps.map((step) => {
          const typeInfo = getStepTypeInfo(step.type);
          const Icon = typeInfo.icon;

          return (
            <Card key={step.id} className="hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${typeInfo.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{step.name}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Custom Statuses */}
                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-2">Status Progression</h4>
                  <div className="flex flex-wrap gap-2">
                    {step.statuses.map((status, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs"
                      >
                        {index + 1}. {status}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Usage Information */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Used in:</span> {step.usedIn.join(", ")}
                  </div>
                  <div>
                    Last modified: {step.lastModified}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
