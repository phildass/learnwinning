
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Home, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Award, 
  BarChart, 
  TrendingUp, 
  CheckCircle, 
  XCircle,
  Clock,
  IndianRupee,
  Eye,
  Download,
  RefreshCw,
  ExternalLink,
  GraduationCap,
  Target
} from "lucide-react";

interface MockUser {
  id: string;
  fullName: string;
  phoneNumber: string;
  age: number;
  qualification: string;
  hasPaid: boolean;
  paymentDate?: string;
  registrationDate: string;
  currentChapter: number;
  completedChapters: number[];
  testResults: { [key: number]: { score: number; passed: boolean } };
  wantsCertificate: boolean;
  certificateIssued: boolean;
  lastAccessed: string;
}

const TOTAL_CHAPTERS = 11;

const generateMockUsers = (): MockUser[] => {
  const mockUsers: MockUser[] = [
    {
      id: "1",
      fullName: "Rajesh Kumar",
      phoneNumber: "+91 98765 43210",
      age: 28,
      qualification: "MBA",
      hasPaid: true,
      paymentDate: "2025-11-20",
      registrationDate: "2025-11-20",
      currentChapter: 8,
      completedChapters: [1, 2, 3, 4, 5, 6, 7],
      testResults: {
        1: { score: 85, passed: true },
        2: { score: 92, passed: true },
        3: { score: 78, passed: true },
        4: { score: 88, passed: true },
        5: { score: 95, passed: true },
        6: { score: 82, passed: true },
        7: { score: 90, passed: true },
      },
      wantsCertificate: true,
      certificateIssued: false,
      lastAccessed: "2025-11-25",
    },
    {
      id: "2",
      fullName: "Priya Sharma",
      phoneNumber: "+91 87654 32109",
      age: 32,
      qualification: "B.Tech",
      hasPaid: true,
      paymentDate: "2025-11-22",
      registrationDate: "2025-11-22",
      currentChapter: 12,
      completedChapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      testResults: {
        1: { score: 90, passed: true },
        2: { score: 88, passed: true },
        3: { score: 92, passed: true },
        4: { score: 85, passed: true },
        5: { score: 94, passed: true },
        6: { score: 87, passed: true },
        7: { score: 91, passed: true },
        8: { score: 89, passed: true },
        9: { score: 93, passed: true },
        10: { score: 86, passed: true },
        11: { score: 90, passed: true },
        12: { score: 95, passed: true },
      },
      wantsCertificate: true,
      certificateIssued: true,
      lastAccessed: "2025-11-25",
    },
    {
      id: "3",
      fullName: "Amit Patel",
      phoneNumber: "+91 76543 21098",
      age: 25,
      qualification: "BCA",
      hasPaid: true,
      paymentDate: "2025-11-23",
      registrationDate: "2025-11-23",
      currentChapter: 4,
      completedChapters: [1, 2, 3],
      testResults: {
        1: { score: 75, passed: true },
        2: { score: 80, passed: true },
        3: { score: 72, passed: true },
      },
      wantsCertificate: true,
      certificateIssued: false,
      lastAccessed: "2025-11-24",
    },
    {
      id: "4",
      fullName: "Sneha Reddy",
      phoneNumber: "+91 65432 10987",
      age: 30,
      qualification: "M.Com",
      hasPaid: true,
      paymentDate: "2025-11-24",
      registrationDate: "2025-11-24",
      currentChapter: 1,
      completedChapters: [],
      testResults: {},
      wantsCertificate: false,
      certificateIssued: false,
      lastAccessed: "2025-11-24",
    },
    {
      id: "5",
      fullName: "Vikram Singh",
      phoneNumber: "+91 54321 09876",
      age: 27,
      qualification: "BA",
      hasPaid: false,
      registrationDate: "2025-11-25",
      currentChapter: 1,
      completedChapters: [],
      testResults: {},
      wantsCertificate: true,
      certificateIssued: false,
      lastAccessed: "2025-11-25",
    },
  ];

  return mockUsers;
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<MockUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<MockUser | null>(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("adminAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const mockUsers = generateMockUsers();
      setUsers(mockUsers);
      localStorage.setItem("adminAuthenticated", "true");
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setUsers([]);
    setSelectedUser(null);
    localStorage.removeItem("adminAuthenticated");
  };

  const calculateStats = () => {
    const totalUsers = users.length;
    const paidUsers = users.filter(u => u.hasPaid).length;
    const activeUsers = users.filter(u => u.hasPaid && u.completedChapters.length > 0).length;
    const completedUsers = users.filter(u => u.certificateIssued).length;
    const revenue = paidUsers * 99;
    const avgProgress = users.filter(u => u.hasPaid).length > 0
      ? users.filter(u => u.hasPaid).reduce((acc, u) => acc + (u.completedChapters.length / TOTAL_CHAPTERS * 100), 0) / paidUsers
      : 0;

    return { totalUsers, paidUsers, activeUsers, completedUsers, revenue, avgProgress };
  };

  const stats = calculateStats();

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Admin Login | Live Like a Winner</title>
          <meta name="description" content="Admin portal for Live Like a Winner" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
          <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center justify-between">
              <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <Image 
                  src="/LLAWLOGO.png" 
                  alt="Live Like a Winner Logo" 
                  width={60} 
                  height={60}
                  className="rounded-lg"
                />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold leading-tight">Live Like a Winner</h1>
                  <p className="text-sm text-muted-foreground">Admin Portal</p>
                </div>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
              </Link>
            </div>
          </header>

          <main className="container py-12 flex items-center justify-center min-h-[calc(100vh-12rem)]">
            <Card className="w-full max-w-md">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <CardTitle>Admin Login</CardTitle>
                </div>
                <CardDescription>
                  Enter admin credentials to access the dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6">
                  <AlertDescription>
                    <strong>Demo Mode:</strong> Use password &quot;admin&quot; to access the dashboard with sample data.
                  </AlertDescription>
                </Alert>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Admin Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter admin password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    Sign In to Admin Portal
                  </Button>
                </form>
              </CardContent>
            </Card>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard | Live Like a Winner</title>
        <meta name="description" content="Admin dashboard for Live Like a Winner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <Image 
                src="/LLAWLOGO.png" 
                alt="Live Like a Winner Logo" 
                width={60} 
                height={60}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold leading-tight">Live Like a Winner</h1>
                <p className="text-sm text-muted-foreground">Admin Dashboard</p>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Sign Out
              </Button>
            </div>
          </div>
        </header>

        <main className="container py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage users, track progress, and monitor course performance
            </p>
          </div>

          <Alert className="mb-8 border-blue-500/50 bg-blue-500/10">
            <AlertDescription className="flex items-center justify-between">
              <span>
                <strong>Demo Mode:</strong> Showing sample data. Connect Supabase for real user management.
              </span>
              <Button variant="ghost" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Data
              </Button>
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">
                <BarChart className="w-4 h-4 mr-2" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="users">
                <Users className="w-4 h-4 mr-2" />
                Users ({stats.totalUsers})
              </TabsTrigger>
              <TabsTrigger value="progress">
                <BookOpen className="w-4 h-4 mr-2" />
                Progress
              </TabsTrigger>
              <TabsTrigger value="certificates">
                <Award className="w-4 h-4 mr-2" />
                Certificates
              </TabsTrigger>
              <TabsTrigger value="navigation">
                <Eye className="w-4 h-4 mr-2" />
                Site Navigation
              </TabsTrigger>
              <TabsTrigger value="content">
                <GraduationCap className="w-4 h-4 mr-2" />
                Content Management
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      Total Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{stats.totalUsers}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stats.paidUsers} paid users
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      Active Learners
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">{stats.activeUsers}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Currently learning
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-600" />
                      Completed Courses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600">{stats.completedUsers}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Certificates issued
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-emerald-600" />
                      Revenue
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-emerald-600">₹{stats.revenue}</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stats.paidUsers} × ₹99
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Completion Rate</CardTitle>
                    <CardDescription>
                      Average progress across all paid users
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm text-muted-foreground">{stats.avgProgress.toFixed(1)}%</span>
                    </div>
                    <Progress value={stats.avgProgress} className="h-2" />
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{stats.completedUsers}</div>
                        <div className="text-xs text-muted-foreground">Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{stats.activeUsers - stats.completedUsers}</div>
                        <div className="text-xs text-muted-foreground">In Progress</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{stats.totalUsers - stats.paidUsers}</div>
                        <div className="text-xs text-muted-foreground">Not Started</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Latest user actions and milestones
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {users.slice(0, 5).map(user => (
                        <div key={user.id} className="flex items-center gap-3 text-sm">
                          <div className={`w-2 h-2 rounded-full ${user.hasPaid ? 'bg-green-500' : 'bg-gray-300'}`} />
                          <div className="flex-1">
                            <p className="font-medium">{user.fullName}</p>
                            <p className="text-xs text-muted-foreground">
                              {user.certificateIssued 
                                ? 'Completed course & received certificate'
                                : user.hasPaid 
                                  ? `Chapter ${user.currentChapter} of ${TOTAL_CHAPTERS}`
                                  : 'Registered, not paid'}
                            </p>
                          </div>
                          <Clock className="w-4 h-4 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="users">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Quick Certificate Access</CardTitle>
                  <CardDescription>
                    Direct links to view certificates for completed users
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {users
                      .filter(u => u.certificateIssued)
                      .map(user => (
                        <Link 
                          key={user.id} 
                          href={`/certificate/${user.id}`} 
                          target="_blank"
                          className="block"
                        >
                          <Button 
                            variant="outline" 
                            className="w-full justify-between h-auto py-3 hover:bg-primary/10 hover:border-primary transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <Award className="w-5 h-5 text-blue-600" />
                              <div className="text-left">
                                <p className="font-semibold text-sm">{user.fullName}</p>
                                <p className="text-xs text-muted-foreground">
                                  Completed {new Date(user.lastAccessed).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <ExternalLink className="w-4 h-4 text-muted-foreground" />
                          </Button>
                        </Link>
                      ))}
                  </div>
                  {users.filter(u => u.certificateIssued).length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      <Award className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p>No certificates issued yet</p>
                      <p className="text-sm">Certificates will appear here when users complete all chapters</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    View and manage all registered users
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead>Certificate</TableHead>
                          <TableHead>Last Active</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map(user => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">
                              <div>
                                <p>{user.fullName}</p>
                                <p className="text-xs text-muted-foreground">{user.qualification}, {user.age}y</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-sm">{user.phoneNumber}</TableCell>
                            <TableCell>
                              {user.hasPaid ? (
                                <Badge className="bg-green-500 hover:bg-green-600">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Paid
                                </Badge>
                              ) : (
                                <Badge variant="secondary">
                                  <XCircle className="w-3 h-3 mr-1" />
                                  Unpaid
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <Progress 
                                    value={(user.completedChapters.length / TOTAL_CHAPTERS) * 100} 
                                    className="h-2 w-20"
                                  />
                                  <span className="text-xs text-muted-foreground">
                                    {user.completedChapters.length}/{TOTAL_CHAPTERS}
                                  </span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {user.certificateIssued ? (
                                <Badge className="bg-blue-500 hover:bg-blue-600">
                                  <Award className="w-3 h-3 mr-1" />
                                  Issued
                                </Badge>
                              ) : user.wantsCertificate ? (
                                <Badge variant="outline">Pending</Badge>
                              ) : (
                                <Badge variant="secondary">Not Required</Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {new Date(user.lastAccessed).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-1">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => setSelectedUser(user)}
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                                {user.certificateIssued && (
                                  <Link href={`/certificate/${user.id}`} target="_blank">
                                    <Button variant="ghost" size="sm">
                                      <Award className="w-4 h-4" />
                                    </Button>
                                  </Link>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {selectedUser && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>User Details: {selectedUser.fullName}</CardTitle>
                    <CardDescription>Complete user profile and progress information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Personal Information</h4>
                        <dl className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Full Name:</dt>
                            <dd className="font-medium">{selectedUser.fullName}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Phone:</dt>
                            <dd className="font-medium">{selectedUser.phoneNumber}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Age:</dt>
                            <dd className="font-medium">{selectedUser.age} years</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Qualification:</dt>
                            <dd className="font-medium">{selectedUser.qualification}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Registered:</dt>
                            <dd className="font-medium">{new Date(selectedUser.registrationDate).toLocaleDateString()}</dd>
                          </div>
                        </dl>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Payment Information</h4>
                        <dl className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Payment Status:</dt>
                            <dd>
                              {selectedUser.hasPaid ? (
                                <Badge className="bg-green-500">Paid</Badge>
                              ) : (
                                <Badge variant="secondary">Unpaid</Badge>
                              )}
                            </dd>
                          </div>
                          {selectedUser.paymentDate && (
                            <>
                              <div className="flex justify-between">
                                <dt className="text-muted-foreground">Payment Date:</dt>
                                <dd className="font-medium">{new Date(selectedUser.paymentDate).toLocaleDateString()}</dd>
                              </div>
                              <div className="flex justify-between">
                                <dt className="text-muted-foreground">Amount Paid:</dt>
                                <dd className="font-medium">₹99</dd>
                              </div>
                            </>
                          )}
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Wants Certificate:</dt>
                            <dd className="font-medium">{selectedUser.wantsCertificate ? 'Yes' : 'No'}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Certificate Status:</dt>
                            <dd>
                              {selectedUser.certificateIssued ? (
                                <Badge className="bg-blue-500">Issued</Badge>
                              ) : (
                                <Badge variant="outline">Not Issued</Badge>
                              )}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Course Progress</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Overall Completion</span>
                          <span className="font-medium">
                            {selectedUser.completedChapters.length}/{TOTAL_CHAPTERS} chapters
                          </span>
                        </div>
                        <Progress 
                          value={(selectedUser.completedChapters.length / TOTAL_CHAPTERS) * 100} 
                          className="h-2"
                        />
                      </div>

                      {Object.keys(selectedUser.testResults).length > 0 && (
                        <div className="mt-4">
                          <h5 className="font-medium text-sm mb-2">Test Results</h5>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {Object.entries(selectedUser.testResults).map(([chapter, result]) => (
                              <div key={chapter} className="border rounded p-2 text-center">
                                <div className="text-xs text-muted-foreground">Chapter {chapter}</div>
                                <div className={`text-lg font-bold ${result.passed ? 'text-green-600' : 'text-red-600'}`}>
                                  {result.score}%
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setSelectedUser(null)}>
                        Close
                      </Button>
                      {selectedUser.certificateIssued && (
                        <Link href={`/certificate/${selectedUser.id}`} target="_blank">
                          <Button>
                            <Award className="w-4 h-4 mr-2" />
                            View Certificate
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="progress">
              <Card>
                <CardHeader>
                  <CardTitle>Course Progress Tracking</CardTitle>
                  <CardDescription>
                    Monitor individual user progress through course chapters
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {users.filter(u => u.hasPaid).map(user => (
                      <div key={user.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-semibold">{user.fullName}</h4>
                            <p className="text-sm text-muted-foreground">
                              Current: Chapter {user.currentChapter} | Completed: {user.completedChapters.length}/{TOTAL_CHAPTERS}
                            </p>
                          </div>
                          <Badge variant={user.certificateIssued ? "default" : "secondary"}>
                            {user.certificateIssued ? 'Completed' : 'In Progress'}
                          </Badge>
                        </div>
                        <Progress 
                          value={(user.completedChapters.length / TOTAL_CHAPTERS) * 100} 
                          className="h-2"
                        />
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-1 mt-3">
                          {Array.from({ length: TOTAL_CHAPTERS }, (_, i) => i + 1).map(chapter => (
                            <div
                              key={chapter}
                              className={`h-8 rounded flex items-center justify-center text-xs font-medium ${
                                user.completedChapters.includes(chapter)
                                  ? 'bg-green-500 text-white'
                                  : chapter === user.currentChapter
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-200 text-gray-600'
                              }`}
                            >
                              {chapter}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certificates">
              <Card>
                <CardHeader>
                  <CardTitle>Certificate Management</CardTitle>
                  <CardDescription>
                    View and manage issued course completion certificates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Student Name</TableHead>
                          <TableHead>Completion Date</TableHead>
                          <TableHead>Test Average</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users
                          .filter(u => u.certificateIssued || (u.wantsCertificate && u.completedChapters.length === TOTAL_CHAPTERS))
                          .map(user => {
                            const testScores = Object.values(user.testResults);
                            const avgScore = testScores.length > 0
                              ? testScores.reduce((sum, r) => sum + r.score, 0) / testScores.length
                              : 0;

                            return (
                              <TableRow key={user.id}>
                                <TableCell className="font-medium">{user.fullName}</TableCell>
                                <TableCell>{new Date(user.lastAccessed).toLocaleDateString()}</TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Progress value={avgScore} className="h-2 w-20" />
                                    <span className="text-sm">{avgScore.toFixed(0)}%</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  {user.certificateIssued ? (
                                    <Badge className="bg-green-500">
                                      <CheckCircle className="w-3 h-3 mr-1" />
                                      Issued
                                    </Badge>
                                  ) : (
                                    <Badge className="bg-yellow-500">
                                      <Clock className="w-3 h-3 mr-1" />
                                      Pending
                                    </Badge>
                                  )}
                                </TableCell>
                                <TableCell className="text-right">
                                  <div className="flex justify-end gap-2">
                                    {user.certificateIssued && (
                                      <Link href={`/certificate/${user.id}`} target="_blank">
                                        <Button variant="ghost" size="sm">
                                          <ExternalLink className="w-4 h-4" />
                                        </Button>
                                      </Link>
                                    )}
                                    <Button variant="ghost" size="sm">
                                      <Download className="w-4 h-4" />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </div>

                  {users.filter(u => u.certificateIssued).length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      No certificates issued yet. Certificates will appear here when users complete the course.
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="navigation">
              <Card>
                <CardHeader>
                  <CardTitle>Site Navigation Preview</CardTitle>
                  <CardDescription>
                    Quick access to all pages and features of the application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link href="/">
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <div className="flex items-start gap-3 w-full">
                          <Home className="w-5 h-5 text-primary mt-1" />
                          <div className="text-left">
                            <p className="font-semibold">Home / Landing Page</p>
                            <p className="text-xs text-muted-foreground">Main entry point with course overview</p>
                          </div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/lessons/sample">
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <div className="flex items-start gap-3 w-full">
                          <BookOpen className="w-5 h-5 text-primary mt-1" />
                          <div className="text-left">
                            <p className="font-semibold">Sample Lesson</p>
                            <p className="text-xs text-muted-foreground">Free preview of Chapter One</p>
                          </div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/auth/login">
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <div className="flex items-start gap-3 w-full">
                          <Users className="w-5 h-5 text-primary mt-1" />
                          <div className="text-left">
                            <p className="font-semibold">Login / Sign In</p>
                            <p className="text-xs text-muted-foreground">Phone number authentication</p>
                          </div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/checkout">
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <div className="flex items-start gap-3 w-full">
                          <IndianRupee className="w-5 h-5 text-primary mt-1" />
                          <div className="text-left">
                            <p className="font-semibold">Checkout / Purchase</p>
                            <p className="text-xs text-muted-foreground">Payment page - ₹99</p>
                          </div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/resources">
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <div className="flex items-start gap-3 w-full">
                          <Download className="w-5 h-5 text-primary mt-1" />
                          <div className="text-left">
                            <p className="font-semibold">Resources & Downloads</p>
                            <p className="text-xs text-muted-foreground">PDF downloads and course materials</p>
                          </div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/payment">
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <div className="flex items-start gap-3 w-full">
                          <CheckCircle className="w-5 h-5 text-primary mt-1" />
                          <div className="text-left">
                            <p className="font-semibold">Payment QR</p>
                            <p className="text-xs text-muted-foreground">UPI payment with QR code</p>
                          </div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/privacy">
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <div className="flex items-start gap-3 w-full">
                          <ShieldCheck className="w-5 h-5 text-primary mt-1" />
                          <div className="text-left">
                            <p className="font-semibold">Privacy Policy</p>
                            <p className="text-xs text-muted-foreground">Data protection & privacy</p>
                          </div>
                        </div>
                      </Button>
                    </Link>

                    <Link href="/terms">
                      <Button variant="outline" className="w-full justify-start h-auto p-4">
                        <div className="flex items-start gap-3 w-full">
                          <Award className="w-5 h-5 text-primary mt-1" />
                          <div className="text-left">
                            <p className="font-semibold">Terms & Conditions</p>
                            <p className="text-xs text-muted-foreground">Legal terms & no-refund policy</p>
                          </div>
                        </div>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="content">
              <div className="space-y-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Modules
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">11</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        10 Chapters + Epilogue
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Complete
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-600">7</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Fully written
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        In Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-amber-600">0</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Partial chapters
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Planned
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600">4</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        To be added
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Complete Course Structure (All 11 Modules)
                    </CardTitle>
                    <CardDescription>
                      All chapters in numerical order with status indicators
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Chapter 1 */}
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">The Living Wave</h4>
                          <Badge className="bg-green-500 text-xs">Complete</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">~3,500 words • Living Wave concept, Gratitude, Know Thyself</p>
                      </div>
                    </div>

                    {/* Chapter 2 */}
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Chapter Two</h4>
                          <Badge className="bg-blue-500 text-xs">Planned</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Content to be added</p>
                      </div>
                    </div>

                    {/* Chapter 3 */}
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Chapter Three</h4>
                          <Badge className="bg-blue-500 text-xs">Planned</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Content to be added</p>
                      </div>
                    </div>

                    {/* Chapter 4 */}
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">The Four Quadrants of Life</h4>
                          <Badge className="bg-green-500 text-xs">Complete</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">~1,200 words • Life stages, Choices framework</p>
                      </div>
                    </div>

                    {/* Chapter 5 */}
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                        5
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">The Sermon at the Mount</h4>
                          <Badge className="bg-green-500 text-xs">Complete</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">~2,000 words • Hearsay, Cockroach Theory</p>
                      </div>
                    </div>

                    {/* Chapter 6 */}
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                        6
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Live Like a Winner!</h4>
                          <Badge className="bg-green-500 text-xs">Complete</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">~1,500 words • Vanilla life concept, Grace through gratitude</p>
                      </div>
                    </div>

                    {/* Chapter 7 */}
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                        7
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">The Old Lady and Her Lost Son</h4>
                          <Badge className="bg-green-500 text-xs">Complete</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">~2,500 words • Rukmini's story, 40-year search</p>
                      </div>
                    </div>

                    {/* Chapter 8 */}
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                        8
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">'Pataphysics Aur Nikla Hero</h4>
                          <Badge className="bg-green-500 text-xs">Complete</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">~1,800 words • Philosophy of absurdism, Metaphysics</p>
                      </div>
                    </div>

                    {/* Chapter 9 */}
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        9
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Chapter Nine</h4>
                          <Badge className="bg-blue-500 text-xs">Planned</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Content to be added</p>
                      </div>
                    </div>

                    {/* Chapter 10 */}
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                        10
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Scientific Reasoning</h4>
                          <Badge className="bg-green-500 text-xs">Complete</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">~1,600 words • WISER Model, Harvard Study, Emotional intelligence</p>
                      </div>
                    </div>

                    {/* Epilogue */}
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                        EP
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Epilogue: Ramu Comes Home</h4>
                          <Badge className="bg-purple-500 text-xs">Complete</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">~2,600 words • Philosophy in action, Miraculous reunion</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Alert>
                  <BookOpen className="h-5 w-5" />
                  <AlertDescription>
                    <p className="font-semibold mb-1">Course Structure Summary</p>
                    <p className="text-sm">
                      The course consists of 11 modules total: 10 main chapters plus an epilogue. Currently, 7 modules are complete (Chapters 1, 4-8, 10, and Epilogue), with 4 chapters (2, 3, 9, and connecting interludes) planned for future completion.
                    </p>
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>
          </Tabs>
        </main>

        <footer className="border-t mt-20 py-8 bg-background">
          <div className="container text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Indian Institute of Professional Skills Development. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
