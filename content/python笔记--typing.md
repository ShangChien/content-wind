---
navigation:
  title: python typing 笔记
head:
  description: This is a notebook page.
---

![just fun](/cover.jpg)

# python typing 笔记

```py
from dataclasses import dataclass
from typing import List

@dataclass
class Player:
    name: str
    number: int
    position: str
    age: int

    @dataclass
    class Team:
        name: str
        players: List['Player']  # 使用字符串注解以避免循环引用

# 创建球员实例
james = Player(name='Lebron James', number=23, position='SF', age=25)
davis = Player(name='Anthony Davis', number=3, position='PF', age=21)

# 创建球队实例
lal = Player.Team(name='Los Angeles Lakers', players=[james, davis])

print(lal)
```
## 解释：

#### 在嵌套的 dataclass 中使用字符串注解 'Player' 是为了避免循环引用的问题。当你在 Team 类中定义 players 字段时，它引用了外部的 Player 类。但此时 Player 类还没有完全定义，所以直接使用 Player 会导致循环引用错误。为了解决这个问题，可以使用字符串 'Player' 作为类型注解，而不是直接使用 Player。这样做的原因是，Python 的类型注解系统允许使用字符串来引用尚未定义的类。当 Python 解释器执行到 Player 类的定义时，它会将字符串 'Player' 替换为实际的 Player 类对象。这样就可以顺利地定义嵌套的 dataclass，并在运行时正确引用外部的 Player 类。使用字符串注解是一种常见的技巧，可以解决在定义类时引用尚未定义的类的问题。这在处理相互引用的类或者循环引用的情况下非常有用。


