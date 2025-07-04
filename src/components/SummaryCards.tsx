import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Transaction } from "./TransactionForm";
import { ArrowDown, ArrowUp, Wallet } from "lucide-react";

interface SummaryCardsProps {
  transactions: Transaction[];
}

export function SummaryCards({ transactions }: SummaryCardsProps) {
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const thisMonthTransactions = transactions.filter(t => {
    const transactionDate = new Date(t.date);
    const now = new Date();
    return transactionDate.getMonth() === now.getMonth() && 
           transactionDate.getFullYear() === now.getFullYear();
  });

  const thisMonthExpenses = thisMonthTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="gradient-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
          <Wallet className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className={`text-2xl font-bold ${balance >= 0 ? 'text-income' : 'text-expense'}`}>
            ${balance.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            {balance >= 0 ? 'Positive balance' : 'Negative balance'}
          </p>
        </CardContent>
      </Card>

      <Card className="gradient-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Income</CardTitle>
          <ArrowUp className="h-4 w-4 text-income" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-income">
            +${totalIncome.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            {transactions.filter(t => t.type === 'income').length} transactions
          </p>
        </CardContent>
      </Card>

      <Card className="gradient-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
          <ArrowDown className="h-4 w-4 text-expense" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-expense">
            -${totalExpenses.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            {transactions.filter(t => t.type === 'expense').length} transactions
          </p>
        </CardContent>
      </Card>

      <Card className="gradient-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">This Month</CardTitle>
          <ArrowDown className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-expense">
            -${thisMonthExpenses.toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            {thisMonthTransactions.filter(t => t.type === 'expense').length} expenses
          </p>
        </CardContent>
      </Card>
    </div>
  );
}