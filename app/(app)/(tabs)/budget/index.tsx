// import { SafeAreaView } from "react-native-safe-area-context";
// import { Text } from "react-native";

// export default function Index() {
//   return (
//     <SafeAreaView>
//       <Text>BUDGET</Text>
//     </SafeAreaView>
//   );
// }
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, Title, Paragraph, Button } from 'react-native-paper';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>3D</Text>
        <Text style={styles.headerSubtitle}>Today</Text>
      </View>
      <View style={styles.balance}>
        <Title style={styles.balanceTitle}>$9400</Title>
        <Paragraph style={styles.balanceSubtitle}>Account Balance</Paragraph>
      </View>
      <View style={styles.income}>
        <Title style={styles.incomeTitle}>$5000</Title>
        <Paragraph style={styles.incomeSubtitle}>Income</Paragraph>
      </View>
      <View style={styles.spendFrequency}>
        <Title style={styles.spendFrequencyTitle}>Hyyp</Title>
        <Paragraph style={styles.spendFrequencySubtitle}>
          Spend Frequency
        </Paragraph>
      </View>
      <View style={styles.recentTransactions}>
        <Title style={styles.recentTransactionsTitle}>Recent Transaction</Title>
        <List.Section>
          <List.Item title="Shopping" description="Buy some grocery" />
          <List.Item title="Subscription" description="Disney+ Annual.." />
          <List.Item title="Food" description="Buy a ramen" />
        </List.Section>
      </View>
      <View style={styles.month}>
        <Title style={styles.monthTitle}>Month</Title>
        <Paragraph style={styles.monthSubtitle}>+</Paragraph>
      </View>
      <View style={styles.expenses}>
        <Title style={styles.expensesTitle}>$1200</Title>
        <Paragraph style={styles.expensesSubtitle}>Expenses</Paragraph>
      </View>
      <View style={styles.year}>
        <Title style={styles.yearTitle}>Year</Title>
        <Button mode="text" style={styles.yearButton}>
          See All
        </Button>
      </View>
      <View style={styles.budget}>
        <Title style={styles.budgetTitle}>-$32</Title>
        <Paragraph style={styles.budgetSubtitle}>Budget</Paragraph>
      </View>
      <View style={styles.timeline}>
        <Title style={styles.timelineTitle}>Timeline</Title>
        <List.Section>
          <List.Item
            title="-$120"
            description="10:00 AM"
            left={() => <List.Icon icon="minus-circle" />}
          />
          <List.Item
            title="-$80"
            description="03:30 PM"
            left={() => <List.Icon icon="minus-circle" />}
          />
          <List.Item
            title="-$32"
            description="07:30 PM"
            left={() => <List.Icon icon="minus-circle" />}
          />
        </List.Section>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  balance: {
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  balanceSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  income: {
    marginBottom: 20,
  },
  incomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  incomeSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  spendFrequency: {
    marginBottom: 20,
  },
  spendFrequencyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  spendFrequencySubtitle: {
    fontSize: 16,
    color: '#666',
  },
  recentTransactions: {
    marginBottom: 20,
  },
  recentTransactionsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  month: {
    marginBottom: 20,
  },
  monthTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  monthSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  expenses: {
    marginBottom: 20,
  },
  expensesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  expensesSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  year: {
    marginBottom: 20,
  },
  yearTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  yearButton: {
    padding: 0,
    margin: 0,
  },
  budget: {
    marginBottom: 20,
  },
  budgetTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  budgetSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  timeline: {
    marginBottom: 20,
  },
  timelineTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});