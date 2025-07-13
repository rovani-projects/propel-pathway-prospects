
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
    ArrowRight,
    Building2,
    Calendar,
    Calendar as CalendarIcon,
    CheckCircle,
    Clock,
    FileText,
    Shield,
    Star,
    Target,
    Users,
    Workflow,
    Zap
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
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Ready for Review
              </Badge>
              <Badge variant="secondary">$35K-45K Budget</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>MVP Delivery Timeline: 4-6 Weeks</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Applicant Journey</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A modern, secure, and flexible portal system that adapts to your unique workflows while ensuring data protection and seamless integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <ArrowRight className="w-5 h-5 mr-2" />
              Review Proposal
            </Button>
            <Button size="lg" variant="outline">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Discussion
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Track Demo */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Track & Step System</h2>
            <p className="text-lg text-gray-600">Experience how applicants progress through customizable workflows</p>
          </div>

          <Card className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Track Progress */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Medical Assistant Track</h3>
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
                        className={`flex items-center space-x-4 p-4 rounded-lg border transition-all cursor-pointer ${
                          step.status === 'completed' ? 'bg-green-50 border-green-200' :
                          step.status === 'in-progress' ? 'bg-blue-50 border-blue-200' :
                          'bg-gray-50 border-gray-200'
                        }`}
                        onClick={() => setActiveTrack(index)}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.status === 'completed' ? 'bg-green-500 text-white' :
                          step.status === 'in-progress' ? 'bg-blue-500 text-white' :
                          'bg-gray-300 text-gray-600'
                        }`}>
                          {step.status === 'completed' ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{step.name}</div>
                          <div className="text-sm text-gray-500 capitalize">{step.type} • {step.status.replace('-', ' ')}</div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          step.status === 'completed' ? 'bg-green-100 text-green-800' :
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

      {/* Key Features */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Solution</h2>
            <p className="text-lg text-gray-600">Modern technology meets nonprofit efficiency</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Flexible Track System</CardTitle>
                <CardDescription>Adapt to any applicant journey with reusable, configurable steps</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sequential or parallel step completion</li>
                  <li>• 5 different step types supported</li>
                  <li>• Visual track builder for admins</li>
                  <li>• Real-time progress tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>Supabase RLS ensures complete data isolation between applicants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Field-level PII encryption</li>
                  <li>• Row-level security policies</li>
                  <li>• 7-10 year audit retention</li>
                  <li>• US data residency compliant</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Powerful Integrations</CardTitle>
                <CardDescription>n8n Cloud middleware for seamless third-party connections</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Salesforce bidirectional sync</li>
                  <li>• Calendly meeting scheduling</li>
                  <li>• FormStack verification</li>
                  <li>• Future-ready for SMS/Email</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Roadmap</h2>
            <p className="text-lg text-gray-600">Structured 6-week delivery plan with clear milestones</p>
          </div>

          <div className="space-y-8">
            {deliverables.map((phase, index) => (
              <Card key={index} className={`relative overflow-hidden ${phase.status === 'current' ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                        phase.status === 'current' ? 'bg-blue-500' : 'bg-gray-400'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.title}</CardTitle>
                        <CardDescription className="text-base">{phase.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={phase.status === 'current' ? 'default' : 'secondary'}>
                        {phase.timeline}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {phase.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                {phase.status === 'current' && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-xs font-medium">
                    CURRENT PHASE
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & ROI */}
      <section className="py-16 px-6 bg-gradient-to-r from-gray-50 to-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment & Value</h2>
            <p className="text-lg text-gray-600">Transparent pricing for maximum nonprofit impact</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 text-sm font-medium">
                RECOMMENDED
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Complete MVP</CardTitle>
                <div className="text-3xl font-bold text-green-600">$42,000</div>
                <CardDescription>Full-featured portal with all integrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Complete track & step system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>All user roles & permissions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Enterprise security features</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>n8n integration workflows</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Salesforce & Calendly sync</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Comprehensive testing & QA</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Star className="w-4 h-4 mr-2" />
                  Select This Plan
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Core System</CardTitle>
                <div className="text-3xl font-bold text-blue-600">$35,000</div>
                <CardDescription>Essential features with basic integrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Basic track & step system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>User management system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Standard security features</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>One primary integration</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                    <span>Advanced workflows</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                    <span>Multiple integrations</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center justify-center space-x-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">50%</div>
                  <div className="text-sm text-gray-600">Faster Processing</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-2xl font-bold text-green-600">90%</div>
                  <div className="text-sm text-gray-600">Reduced Manual Work</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-gray-600">Data Security</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-6 bg-white border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Applicant Process?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss your specific needs and customize this solution for Propel America's unique requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <CalendarIcon className="w-5 h-5 mr-2" />
              Schedule Strategy Call
            </Button>
            <Button size="lg" variant="outline">
              <FileText className="w-5 h-5 mr-2" />
              Download Full Proposal
            </Button>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            Questions? Contact us at proposal@yourcompany.com or (555) 123-4567
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
