import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { Transaction } from "./TransactionForm";
import { cn } from "@/lib/utils";

interface TransactionListProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: string) => void;
}

export function TransactionList({ transactions, onEdit, onDelete }: TransactionListProps) {
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true;
    return transaction.type === filter;
  });

  const sortedTransactions = filteredTransactions.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Card className="gradient-card">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <div className="flex gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'income' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('income')}
            className={filter === 'income' ? 'bg-income hover:bg-income/90' : ''}
          >
            Income
          </Button>
          <Button
            variant={filter === 'expense' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('expense')}
            className={filter === 'expense' ? 'bg-expense hover:bg-expense/90' : ''}
          >
            Expenses
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {sortedTransactions.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No transactions found. Add your first transaction above!
            </div>
          ) : (
            sortedTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 border border-soft rounded-lg hover:shadow-md transition-all animate-slide-up"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <h4 className="font-medium">{transaction.description}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {transaction.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {format(new Date(transaction.date), "MMM dd, yyyy")}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={cn(
                          "font-semibold text-lg",
                          transaction.type === 'income' ? "text-income" : "text-expense"
                        )}
                      >
                        {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(transaction)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDelete(transaction.id)}
                    className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}