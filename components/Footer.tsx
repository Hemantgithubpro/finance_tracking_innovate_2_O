import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div>
            <h3 className="font-semibold mb-3">FinanceTracker</h3>
            <p className="text-sm text-muted-foreground">
              Take control of your financials with our tool that helps you track your expenses and income. FinanceTracker is a project made by Sigma Coders.
            </p>
          </div>
          
          {/* <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Features</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a>
              </li>
            </ul>
          </div> */}
          
          {/* <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">About</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Blog</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">Careers</a>
              </li>
            </ul>
          </div> */}
          
          {/* <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div> */}
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FinanceTracker by <b>Sigma Coders</b>.</p>
        </div>
      </div>
    </footer>
  );
}