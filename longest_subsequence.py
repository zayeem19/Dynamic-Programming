def longest_subsequence(seq1, seq2, i=0, j=0, memo={}):
	key = (i,j)
	if key in memo:
		return memo[key]
	elif len(seq1) == i or len(seq2) == j:
		memo[key]= 0
	elif seq1[i] == seq2[j]:
		memo[key]= 1 + longest_subsequence(seq1, seq2, i+1, j+1)
	else:
		memo[key]= max(longest_subsequence(seq1, seq2, i+1, j), 
					longest_subsequence(seq1, seq2, i, j+1))
	return memo[key] 


sequence1 = input('>')
sequence2 = input('>')
print(longest_subsequence(sequence1, sequence2))

