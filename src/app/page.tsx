import {
  Search,
  MessageSquare,
  Bell,
  Home,
  Trophy,
  BookOpen,
  Zap,
  Newspaper,
  Compass,
  Users,
  Crown,
  Lightbulb,
  MessageCircle,
  Plus,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function QuizHubDashboard() {
  const sidebarItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Trophy, label: "Today's Challenge" },
    { icon: BookOpen, label: "Categories" },
    { icon: Zap, label: "Quiz Battle" },
    { icon: Newspaper, label: "News & Updates" },
    { icon: Compass, label: "Explore Quizzes" },
    { icon: Users, label: "Quiz Tournament" },
    { icon: Crown, label: "Leaderboard" },
    { icon: Lightbulb, label: "Quiz Creator Tips" },
    { icon: MessageCircle, label: "Quiz Discussions" },
    { icon: Plus, label: "Create Quiz" },
  ]

  const categories = [
    { name: "Movies", color: "bg-purple-500", icon: "🎬", count: 9 },
    { name: "Music", color: "bg-orange-500", icon: "🎵", count: 2 },
    { name: "Politics", color: "bg-red-500", icon: "🏛️", count: 6 },
    { name: "Puzzle", color: "bg-yellow-500", icon: "🧩", count: 4 },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 py-4 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">QuizHub</span>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search quizzes, categories, creators..."
              className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <MessageSquare className="h-6 w-6 text-slate-300 cursor-pointer hover:text-white" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-blue-500 text-xs flex items-center justify-center p-0">
              2
            </Badge>
          </div>
          <div className="relative">
            <Bell className="h-6 w-6 text-slate-300 cursor-pointer hover:text-white" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-xs flex items-center justify-center p-0">
              3
            </Badge>
          </div>
          <div className="flex items-center space-x-2 bg-slate-700 px-3 py-1 rounded-lg">
            <span className="text-yellow-400 font-semibold">$124.50</span>
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-800 min-h-screen border-r border-slate-700">
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  item.active ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </nav>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
              <LogOut className="h-5 w-5" />
              <span className="text-sm font-medium">Logout</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-12 mb-8 overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Your Quiz Adventure
                <br />
                Starts Here:
                <br />
                <span className="text-blue-400">Play, Share, Earn!</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Build engaging quizzes, challenge others, and earn rewards
                <br />
                for your knowledge.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  Create Quiz
                </Button>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Join Contest
                </Button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full transform rotate-12">
              <span className="font-bold">Science Quiz</span>
            </div>
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 right-16 w-16 h-16 bg-yellow-400 rounded-full opacity-30"></div>
          </div>

          {/* Quiz Categories */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Quiz Categories</h2>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`${category.color} rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform relative overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="text-white font-bold text-lg mb-1">{category.name}</h3>
                    <Badge className="bg-white/20 text-white border-0">{category.count}</Badge>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-white/10 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
