import { useState } from "react";
import { TransactionForm, Transaction } from "./TransactionForm";
import { TransactionList } from "./TransactionList";
import { SummaryCards } from "./SummaryCards";
import { Charts } from "./Charts";
import { useToast } from "@/hooks/use-toast";

// Mock data for demonstration
const initialTransactions: Transaction[] = [
  {
    id: "1",
    amount: 2500,
    description: "Salary",
    category: "Income",
    date: new Date(2024, 6, 1),
    type: "income"
  },
  {
    id: "2",
    amount: 800,
    description: "Rent Payment",
    category: "Bills & Utilities",
    date: new Date(2024, 6, 1),
    type: "expense"
  },
  {
    id: "3",
    amount: 150,
    description: "Groceries",
    category: "Food & Dining",
    date: new Date(2024, 6, 3),
    type: "expense"
  },
  {
    id: "4",
    amount: 50,
    description: "Gas Station",
    category: "Transportation",
    date: new Date(2024, 6, 4),
    type: "expense"
  },
  {
    id: "5",
    amount: 300,
    description: "Online Shopping",
    category: "Shopping",
    date: new Date(2024, 6, 5),
    type: "expense"
  },
  {
    id: "6",
    amount: 1200,
    description: "Freelance Project",
    category: "Income",
    date: new Date(2024, 5, 15),
    type: "income"
  },
  {
    id: "7",
    amount: 120,
    description: "Dinner Out",
    category: "Food & Dining",
    date: new Date(2024, 5, 20),
    type: "expense"
  },
  {
    id: "8",
    amount: 200,
    description: "Electricity Bill",
    category: "Bills & Utilities",
    date: new Date(2024, 5, 25),
    type: "expense"
  }
];

export function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const { toast } = useToast();

  const handleAddTransaction = (transactionData: Omit<Transaction, 'id'>) => {
    if (editingTransaction) {
      // Update existing transaction
      setTransactions(prev => prev.map(t => 
        t.id === editingTransaction.id 
          ? { ...transactionData, id: editingTransaction.id }
          : t
      ));
      setEditingTransaction(null);
      toast({
        title: "Transaction Updated",
        description: "Your transaction has been successfully updated.",
      });
    } else {
      // Add new transaction
      const newTransaction: Transaction = {
        ...transactionData,
        id: Date.now().toString()
      };
      setTransactions(prev => [newTransaction, ...prev]);
      toast({
        title: "Transaction Added",
        description: "Your transaction has been successfully added.",
      });
    }
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
    toast({
      title: "Transaction Deleted",
      description: "Your transaction has been successfully deleted.",
      variant: "destructive",
    });
  };

  const cancelEdit = () => {
    setEditingTransaction(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Personal Finance Visualizer
          </h1>
          <p className="text-muted-foreground mt-2">
            Track your income and expenses with beautiful visualizations
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Form and Charts */}
          <div className="xl:col-span-2 space-y-8">
            <div className="relative">
              <TransactionForm 
                onSubmit={handleAddTransaction} 
                transaction={editingTransaction || undefined}
              />
              {editingTransaction && (
                <button
                  onClick={cancelEdit}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cancel Edit
                </button>
              )}
            </div>
            
            <Charts transactions={transactions} />
          </div>

          {/* Right Column - Summary and Transactions */}
          <div className="space-y-8">
            <SummaryCards transactions={transactions} />
            <TransactionList 
              transactions={transactions}
              onEdit={handleEditTransaction}
              onDelete={handleDeleteTransaction}
            />
          </div>
        </div>
      </div>
    </div>
  );
}