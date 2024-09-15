import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useBusinessContext } from '@/lib/context'; // Adjust the import path as necessary

const LoanDisplay = () => {
  const { loans, balance, repayLoan } = useBusinessContext();

  const handleRepayLoan = (loanId: string, amount: number) => {
    if (balance >= amount) {
      repayLoan(loanId);
    } else {
      // You might want to show an alert here
      console.log("Insufficient balance to repay this loan");
    }
  };

  const renderLoanItem = ({ item }: { item: any }) => {
    const totalToRepay = item.amount + (item.amount * item.interest / 100);
    return (
      <View style={styles.loanItem}>
        <Text style={styles.loanAmount}>Loan Amount: ${item.amount.toFixed(2)}</Text>
        <Text style={styles.loanInterest}>Interest: {item.interest}%</Text>
        <Text style={styles.loanTotal}>Total to Repay: ${totalToRepay.toFixed(2)}</Text>
        <TouchableOpacity 
          style={styles.repayButton} 
          onPress={() => handleRepayLoan(item.id, totalToRepay)}
        >
          <Text style={styles.repayButtonText}>Repay Loan</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Loans</Text>
      {loans.length > 0 ? (
        <FlatList
          data={loans}
          renderItem={renderLoanItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noLoansText}>You have no active loans.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  loanItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  loanAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loanInterest: {
    fontSize: 16,
    color: '#666',
  },
  loanTotal: {
    fontSize: 16,
    marginTop: 8,
  },
  repayButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  repayButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  noLoansText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
  },
});

export default LoanDisplay;