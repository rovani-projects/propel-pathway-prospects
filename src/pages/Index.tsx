
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Shield,
  Users
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeTrack, setActiveTrack] = useState(0);

  const trackSteps = [
    { id: 1, name: "Application Submission", type: "form", status: "completed", icon: FileText },
    { id: 2, name: "Document Upload", type: "upload", status: "completed", icon: FileText },
    { id: 3, name: "Background Check", type: "manual", status: "in-progress", icon: Shield },
    { id: 4, name: "Interview Scheduling", type: "calendly", status: "pending", icon: Calendar },
    { id: 5, name: "Final Review", type: "informational", status: "pending", icon: CheckCircle },
  ];

  const deliverables = [
    {
      phase: "Phase 1",
      title: "Data Model & Architecture",
      description: "Complete database schema, ERD, and system architecture",
      timeline: "Week 1-2",
      status: "current",
      items: ["Supabase Schema", "RLS Policies", "Security Framework", "ERD Diagrams"]
    },
    {
      phase: "Phase 2",
      title: "Core Portal Development",
      description: "User authentication, track builder, and step management",
      timeline: "Week 3-4",
      status: "upcoming",
      items: ["User Management", "Track Builder", "Step Configuration", "Progress Tracking"]
    },
    {
      phase: "Phase 3",
      title: "Integration & Testing",
      description: "n8n workflows, third-party integrations, and comprehensive testing",
      timeline: "Week 5-6",
      status: "upcoming",
      items: ["Salesforce Sync", "Calendly Integration", "FormStack Connection", "QA Testing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Propel America Portal</h1>
                <p className="text-sm text-gray-600">Comprehensive Consulting Proposal</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <a href="/track-builder" >
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Track Editor
                </Badge>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Track Demo */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Card className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Track Progress */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Propel Onboarding Track</h3>
                    <p className="text-gray-600">Applicant: Sarah Johnson</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">60%</div>
                    <div className="text-sm text-gray-500">Complete</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {trackSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.id}
                        className={`flex items-center space-x-4 p-4 rounded-lg border transition-all cursor-pointer ${step.status === 'completed' ? 'bg-green-50 border-green-200' :
                          step.status === 'in-progress' ? 'bg-blue-50 border-blue-200' :
                            'bg-gray-50 border-gray-200'
                          }`}
                        onClick={() => setActiveTrack(index)}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.status === 'completed' ? 'bg-green-500 text-white' :
                          step.status === 'in-progress' ? 'bg-blue-500 text-white' :
                            'bg-gray-300 text-gray-600'
                          }`}>
                          {step.status === 'completed' ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{step.name}</div>
                          <div className="text-sm text-gray-500 capitalize">{step.type} • {step.status.replace('-', ' ')}</div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${step.status === 'completed' ? 'bg-green-100 text-green-800' :
                          step.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                          {step.status === 'completed' ? 'Complete' :
                            step.status === 'in-progress' ? 'In Progress' : 'Pending'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step Details */}
              <div className="flex-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span>Background Check</span>
                    </CardTitle>
                    <CardDescription>Manual confirmation required</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Initial screening completed</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>References contacted</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>Awaiting final verification</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="text-sm text-gray-600 mb-2">Assigned Case Worker</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">Mike Rodriguez</div>
                          <div className="text-xs text-gray-500">Senior Case Worker</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
