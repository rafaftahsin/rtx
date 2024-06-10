---
sidebar_position: 3
title: Array
---

### Initialization of an Array

```shell
myArray=("cat" "dog" "mouse" "frog")
```

Or for associative array

```shell
declare -a myArray
```

Ref: https://www.gnu.org/software/bash/manual/html_node/Arrays.html

### Accessing Array element 

| Array Syntax         | Meaning                                     |
|----------------------|---------------------------------------------|
| `${myArray[0]}`      | 1st Element of Array                        |
| `${myArray[@]}`      | Loop Through all element                    |
| `${#myArray[@]}`     | Number of Element of Array                  |
| `${myArray[-1]}`     | Last Element of the array                   |
| `${myArray[@]:2:1}`  | 1 element from index 2                      |
| `${myArray[@]:2:-1}` | From element index 2 to last element        |
| `${!myArray[@]}`     | Array indices or keys for assciative arrays |


Find mroe Shell parameter expansion at  https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html

### Looping over all element of array

```shell
for str in ${myArray[@]}; do
  echo $str
done
```

Looping through indices

```shell
for i in ${!myArray[@]}; do
  echo "element $i is ${myArray[$i]}"
done
```

Ref: https://www.freecodecamp.org/news/bash-array-how-to-declare-an-array-of-strings-in-a-bash-script/