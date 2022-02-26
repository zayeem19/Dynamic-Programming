def knapsack(capacity, weight, profit, i=0):
	if i == len(weight):
		return 0
	elif weight[i] > capacity:
		return knapsack(capacity, weight, profit, i+1)
	else:
		return max(profit[i] + knapsack(capacity - weight[i], weight, profit, i+1),
					knapsack(capacity, weight, profit, i+1) )


getCapacity = input('>')
getWeight = input('>')
getProfit = input('>')
print(knapsack(getCapacity, getWeight, getProfit))