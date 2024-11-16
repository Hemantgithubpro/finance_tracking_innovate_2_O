import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Wallet className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">FinanceTracker</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link href="/stocks">
              <Button variant="ghost">Stocks</Button>
            </Link>
            <Link href="/reports">
              <Button variant="ghost">Reports</Button>
            </Link>
            <Link href="/analytics">
              <Button variant="ghost">Analytics</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}