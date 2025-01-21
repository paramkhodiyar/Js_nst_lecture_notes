# x = 17
# b = bin(x)
# ans = ""
# ans+=b[2:]
# print(ans)

def median(data_list):
    data_list.sort()
    n = len(data_list)
    if n % 2 != 0:
        return data_list[(n + 1) // 2 - 1]
    else:
        ans = (data_list[(n // 2) - 1] + data_list[n // 2]) / 2
        return ans