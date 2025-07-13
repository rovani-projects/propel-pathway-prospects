
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Users, 
  FileText, 
  Calendar, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  Plus,
  Settings,
  Building2,
  Workflow,
  Edit,
  Trash2,
  Save,
  Eye,
  Copy,
  ChevronDown,
  ChevronRight,
  DragHandleDots2Icon,
  GripVertical
} from "lucide-react";
import { StepBuilder } from "@/components/track-builder/StepBuilder";
import { TrackAssembler } from "@/components/track-builder/TrackAssembler";
import { StepLibrary } from "@/components/track-builder/StepLibrary";

const TrackBuilder = () => {
  const [activeTab, setActiveTab] = useState("library");
  const [selectedTrack, setSelectedTrack] = useState("teacher-cert");

  const existingTracks = [
    {
      id: "teacher-cert",
      name: "Teacher Certification Track",
      description: "Complete certification process for new teachers",
      steps: 5,
      active: true,
      applicants: 12
    },
    {
      id: "admin-track",
      name: "Administrative Track",
      description: "Administrative position application process",
      steps: 4,
      active: true,
      applicants: 3
    },
    {
      id: "substitute-track",
      name: "Substitute Teacher Track",
      description: "Fast-track process for substitute teachers",
      steps: 3,
      active: false,
      applicants: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Track Builder</h1>
                <p className="text-sm text-gray-600">Design and manage applicant journey workflows</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Manager Access
              </Badge>
              <Button size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview Mode
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="library">Step Library</TabsTrigger>
            <TabsTrigger value="builder">Step Builder</TabsTrigger>
            <TabsTrigger value="tracks">Track Assembly</TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Step Library</h2>
                <p className="text-gray-600">Manage reusable steps for your application tracks</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create New Step
              </Button>
            </div>
            <StepLibrary />
          </TabsContent>

          <TabsContent value="builder" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Step Builder</h2>
                <p className="text-gray-600">Create and configure individual steps with custom statuses</p>
              </div>
            </div>
            <StepBuilder />
          </TabsContent>

          <TabsContent value="tracks" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Track Assembly</h2>
                <p className="text-gray-600">Connect steps together to create complete applicant journeys</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create New Track
              </Button>
            </div>
            
            {/* Track Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {existingTracks.map((track) => (
                <Card 
                  key={track.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedTrack === track.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedTrack(track.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{track.name}</CardTitle>
                      <Badge variant={track.active ? "default" : "secondary"}>
                        {track.active ? "Active" : "Draft"}
                      </Badge>
                    </div>
                    <CardDescription>{track.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{track.steps} steps</span>
                      <span>{track.applicants} applicants</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <TrackAssembler selectedTrack={selectedTrack} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TrackBuilder;
