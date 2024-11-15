import { ArrowRight, PieChart, Wallet, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
            Take Control of Your Finances
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Track your income, manage expenses, and achieve your financial goals with our intuitive personal finance tracker.
          </p>
          <Link href="/dashboard">
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-6 rounded-xl shadow-lg">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg w-fit mb-4">
              <Wallet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expense Tracking</h3>
            <p className="text-muted-foreground">
              Monitor your spending habits with detailed categorization
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-lg">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg w-fit mb-4">
              <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Income Management</h3>
            <p className="text-muted-foreground">
              Track multiple income sources and analyze growth
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-lg">
            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg w-fit mb-4">
              <PieChart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visual Analytics</h3>
            <p className="text-muted-foreground">
              Understand your finances with intuitive charts and graphs
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-lg">
            <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg w-fit mb-4">
              <Shield className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Data</h3>
            <p className="text-muted-foreground">
              Your financial data is encrypted and secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}