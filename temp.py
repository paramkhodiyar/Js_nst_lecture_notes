"""Matrix multiplication"""
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]





# def col_printing(matrix):
#     for i in range(len(matrix)):
#         for j in range(len(matrix[i])):
#             print(matrix[j][i], end=" ")
#         print()


# sfi, cmean = map(float,input().split())
# q = int(input())
# for i in range(q):
#     temp = list(map(int,input().split()))
#     if temp[0]==1:
#         sfixi = sfi * cmean
#         x = sfixi + (temp[1]*temp[2])
#         sfi+=temp[2]
#         cmean = round(x/sfi,2)
#     if temp[0]==2:
#         print(round(cmean,2))

# import numpy as np
# pdata = np.percentile(data, 25)  
# print(f"50th Percentile: {pdata}")

data = [45, 50, 55, 60, 65, 70, 75, 80, 85, 90]


R = (0.75*(len(data)+1))
i = int(R)
d = R - i
new_pdata = data[i-1] + d*(data[i] - data[i-1])
print(new_pdata)


