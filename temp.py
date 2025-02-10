# # """Matrix multiplication"""
# # matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]





# # # def col_printing(matrix):
# # #     for i in range(len(matrix)):
# # #         for j in range(len(matrix[i])):
# # #             print(matrix[j][i], end=" ")
# # #         print()


# # # sfi, cmean = map(float,input().split())
# # # q = int(input())
# # # for i in range(q):
# # #     temp = list(map(int,input().split()))
# # #     if temp[0]==1:
# # #         sfixi = sfi * cmean
# # #         x = sfixi + (temp[1]*temp[2])
# # #         sfi+=temp[2]
# # #         cmean = round(x/sfi,2)
# # #     if temp[0]==2:
# # #         print(round(cmean,2))

# # # import numpy as np
# # # pdata = np.percentile(data, 25)  
# # # print(f"50th Percentile: {pdata}")

# # data = [45, 50, 55, 60, 65, 70, 75, 80, 85, 90]


# # R = (0.75*(len(data)+1))
# # i = int(R)
# # d = R - i
# # new_pdata = data[i-1] + d*(data[i] - data[i-1])
# # print(new_pdata)

# def subsets(nums):
#     result = [[]]
#     for num in nums:
#         result += [curr + [num] for curr in result]
#     return result
# nums = [1,2]
# print(subsets(nums))
# l = [0,1,0,3,12]
# c = l.count(0)
# ans = []
# for i in l:
#     if i != 0:
#         ans.append(i)
# ans.extend([0] * c)
# print(ans)

# n = int(input())
# l = list(map(int, input().split()))
# pref = [0] * n
# pref[0] = l[0]

# for i in range(1, n):
#     pref[i] = pref[i - 1] + l[i]
# q = int(input())
# for i in range(q):
#     l, r = map(int, input().split())
#     if l != 0:
#         ans = pref[r] - pref[l - 1]
#         print(ans)
#     else:
#         ans = pref[r]
#         print(ans)
# def bsearch(nums,target):
#     l = 0
#     r = len(nums)-1
#     while l<=r:
#         mid = (l+r)//2
#         if nums[mid]==target:
#             return mid
#         elif nums[mid]> target:
#             r = mid -1
#         elif nums[mid]<target:
#             l = mid + 1
#     return -1

# nums = [-1,0,3,5,8,9,12]
# target = 9

# print(bsearch(nums,target))


# n, k = map(int, input().split())
# l = list(map(int, input().split()))

# prefix = [0] * (n + 1)
# for i in range(n):
#     prefix[i + 1] = prefix[i] + l[i]

# c = 0
# j = 0
# for i in range(n):
#     while j < n and prefix[j + 1] - prefix[i] < k:
#         j += 1
#     c += (n - j)

# print(c)

# s = "ACACTACG"
# pref = [0] * (len(s) + 1)
# for i in range(len(s)):
#     pref[i + 1] = pref[i] + (s[i] == "A")
# c = 0
# j = 0
# for i in range(len(s)):
#     while j < len(s) and pref[j + 1] - pref[i] < 2:
#         j += 1
#     c += (len(s) - j)
# print(c)

# def fn(n=5):
#     if n == 0:
#         return 1
#     if n % 2 == 0:
#         return fn(n - 1) * 2
#     return fn(n - 1) * 3
# print(fn())

# t = 1
# for i in range(t):
#     temp = input()
#     i = temp.rfind("us")
#     ans = temp[:i]
#     ans += "i"
    
#     print(ans)
t = int(input())
for i in range(t):
    a = input()
    n = len(a)
    if n <= 1:
        print(n)
        continue
    b = ""
    i = 0
    while i<n:
        j = i
        while j<n and a[j]==a[i]:
            j+=1
        l = j-i
        if l % 2 != 0:
            b += a[i]
        i = j
    print(len(b))