
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Edit,
  FileText,
  GripVertical,
  Info,
  Plus,
  Shield,
  Trash2
} from "lucide-react";
import { useState } from "react";

interface TrackAssemblerProps {
  selectedTrack: string;
}

export const TrackAssembler = ({ selectedTrack }: TrackAssemblerProps) => {
  const [trackSteps, setTrackSteps] = useState([
    {
      id: "app-form",
      name: "Application Submission",
      type: "form",
      order: 1,
      estimatedDays: 1,
      required: true
    },
    {
      id: "doc-upload",
      name: "Document Upload",
      type: "upload",
      order: 2,
      estimatedDays: 3,
      required: true
    },
    {
      id: "bg-check",
      name: "Background Check",
      type: "manual",
      order: 3,
      estimatedDays: 7,
      required: true
    },
    {
      id: "interview",
      name: "Interview Scheduling",
      type: "calendly",
      order: 4,
      estimatedDays: 5,
      required: true
    },
    {
      id: "final-review",
      name: "Final Review",
      type: "informational",
      order: 5,
      estimatedDays: 2,
      required: true
    }
  ]);

  const availableSteps = [
    { id: "orientation", name: "Orientation Information", type: "informational" },
    { id: "portfolio", name: "Portfolio Review", type: "upload" },
    { id: "reference-check", name: "Reference Check", type: "manual" },
    { id: "skills-assessment", name: "Skills Assessment", type: "form" }
  ];

  const stepTypes = [
    { id: "form", label: "Form", icon: FileText, color: "bg-blue-500" },
    { id: "upload", label: "Upload", icon: FileText, color: "bg-green-500" },
    { id: "manual", label: "Manual", icon: Shield, color: "bg-orange-500" },
    { id: "calendly", label: "Meeting", icon: Calendar, color: "bg-purple-500" },
    { id: "informational", label: "Info", icon: Info, color: "bg-gray-500" }
  ];

  const getStepTypeInfo = (type: string) => {
    return stepTypes.find(t => t.id === type) || stepTypes[0];
  };

  const totalEstimatedDays = trackSteps.reduce((sum, step) => sum + step.estimatedDays, 0);

  return (
    <div className="space-y-6">
      {/* Track Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Default Application Track</CardTitle>
              <CardDescription>Standard application process for general entry</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{trackSteps.length}</div>
              <div className="text-sm text-gray-500">Steps</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Estimated completion time: {totalEstimatedDays} days</span>
            <span>12 active applicants</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Track Flow */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Track Flow</h3>
            <Button size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Step
            </Button>
          </div>

          <div className="space-y-3">
            {trackSteps.map((step, index) => {
              const typeInfo = getStepTypeInfo(step.type);
              const Icon = typeInfo.icon;

              return (
                <div key={step.id}>
                  <Card className="hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                          <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />
                          <div className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-bold">
                            {step.order}
                          </div>
                          <div className={`w-8 h-8 ${typeInfo.color} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{step.name}</div>
                          <div className="text-sm text-gray-500">
                            {typeInfo.label} • ~{step.estimatedDays} days
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          {step.required && (
                            <Badge variant="outline" className="text-xs">Required</Badge>
                          )}
                          <Button size="sm" variant="ghost">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Available Steps */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Available Steps</h3>
          <div className="space-y-3">
            {availableSteps.map((step) => {
              const typeInfo = getStepTypeInfo(step.type);
              const Icon = typeInfo.icon;

              return (
                <Card key={step.id} className="cursor-pointer hover:shadow-md transition-all">
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 ${typeInfo.color} rounded flex items-center justify-center`}>
                        <Icon className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{step.name}</div>
                        <div className="text-xs text-gray-500">{typeInfo.label}</div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Track Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Track Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Total Steps</span>
                <span className="font-medium">{trackSteps.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Required Steps</span>
                <span className="font-medium">{trackSteps.filter(s => s.required).length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Est. Duration</span>
                <span className="font-medium">{totalEstimatedDays} days</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Active Applicants</span>
                <span className="font-medium">12</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <Button variant="destructive">
          Archive Track
        </Button>
        <div className="space-x-2">
          <Button variant="outline">Save Draft</Button>
          <Button>Publish Changes</Button>
        </div>
      </div>
    </div>
  );
};
