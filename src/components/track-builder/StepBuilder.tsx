
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  FileText, 
  Calendar, 
  Info,
  Plus,
  X,
  Save,
  ArrowLeft
} from "lucide-react";

export const StepBuilder = () => {
  const [stepName, setStepName] = useState("Background Check");
  const [stepDescription, setStepDescription] = useState("Comprehensive background verification process");
  const [stepType, setStepType] = useState("manual");
  const [customStatuses, setCustomStatuses] = useState([
    "Initial screening completed",
    "References contacted", 
    "Awaiting final verification"
  ]);
  const [newStatus, setNewStatus] = useState("");

  const stepTypes = [
    { id: "form", label: "Form Completion", icon: FileText, description: "Applicant fills out a form" },
    { id: "upload", label: "Document Upload", icon: FileText, description: "Applicant uploads required documents" },
    { id: "manual", label: "Manual Confirmation", icon: Shield, description: "Staff manually confirms completion" },
    { id: "calendly", label: "Meeting Scheduling", icon: Calendar, description: "Schedule via Calendly integration" },
    { id: "informational", label: "Informational Only", icon: Info, description: "Display information to applicant" }
  ];

  const addStatus = () => {
    if (newStatus.trim()) {
      setCustomStatuses([...customStatuses, newStatus.trim()]);
      setNewStatus("");
    }
  };

  const removeStatus = (index: number) => {
    setCustomStatuses(customStatuses.filter((_, i) => i !== index));
  };

  const moveStatus = (index: number, direction: 'up' | 'down') => {
    const newStatuses = [...customStatuses];
    if (direction === 'up' && index > 0) {
      [newStatuses[index], newStatuses[index - 1]] = [newStatuses[index - 1], newStatuses[index]];
    } else if (direction === 'down' && index < newStatuses.length - 1) {
      [newStatuses[index], newStatuses[index + 1]] = [newStatuses[index + 1], newStatuses[index]];
    }
    setCustomStatuses(newStatuses);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Library
        </Button>
        <div>
          <h3 className="text-lg font-semibold">Creating: {stepName || "New Step"}</h3>
          <p className="text-sm text-gray-600">Configure step details and status progression</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Step Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Step Configuration</CardTitle>
            <CardDescription>Basic step information and type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="stepName">Step Name</Label>
              <Input
                id="stepName"
                value={stepName}
                onChange={(e) => setStepName(e.target.value)}
                placeholder="Enter step name..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stepDescription">Description</Label>
              <Input
                id="stepDescription"
                value={stepDescription}
                onChange={(e) => setStepDescription(e.target.value)}
                placeholder="Describe this step..."
              />
            </div>

            <div className="space-y-3">
              <Label>Step Type</Label>
              <div className="grid gap-3">
                {stepTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <div
                      key={type.id}
                      className={`border rounded-lg p-3 cursor-pointer transition-all ${
                        stepType === type.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setStepType(type.id)}
                    >
                      <div className="flex items-start space-x-3">
                        <Icon className="w-5 h-5 text-gray-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-sm">{type.label}</div>
                          <div className="text-xs text-gray-600">{type.description}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Status Progression</CardTitle>
            <CardDescription>Define the stages this step can have</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Current Statuses */}
            <div className="space-y-2">
              {customStatuses.map((status, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 border rounded">
                  <Badge variant="outline" className="w-6 h-6 p-0 flex items-center justify-center text-xs">
                    {index + 1}
                  </Badge>
                  <span className="flex-1 text-sm">{status}</span>
                  <div className="flex space-x-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => moveStatus(index, 'up')}
                      disabled={index === 0}
                      className="h-6 w-6 p-0"
                    >
                      ↑
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => moveStatus(index, 'down')}
                      disabled={index === customStatuses.length - 1}
                      className="h-6 w-6 p-0"
                    >
                      ↓
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeStatus(index)}
                      className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add New Status */}
            <div className="flex space-x-2">
              <Input
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                placeholder="Add new status..."
                onKeyPress={(e) => e.key === 'Enter' && addStatus()}
              />
              <Button onClick={addStatus} size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <div className="text-xs text-gray-500">
              Statuses define the progression of this step. Applicants will move through these stages sequentially.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Live Preview</CardTitle>
          <CardDescription>How this step will appear to applicants</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{stepName}</div>
                <div className="text-sm text-gray-500">{stepDescription}</div>
              </div>
              <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>66%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '66%'}}></div>
              </div>
            </div>

            <div className="space-y-2">
              {customStatuses.map((status, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  {index < 2 ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                  )}
                  <span className={index < 2 ? "text-gray-900" : "text-gray-500"}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button>
          <Save className="w-4 h-4 mr-2" />
          Save Step
        </Button>
      </div>
    </div>
  );
};
