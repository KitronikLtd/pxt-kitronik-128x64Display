let item = 0
kitronik_VIEW128x64.init(60)
kitronik_VIEW128x64.drawRect(
60,
30,
0,
0
)
kitronik_VIEW128x64.show(
"Hello!",
1
)
kitronik_VIEW128x64.show(
"1234567890",
2
)
item = 0
basic.forever(() => {
    kitronik_VIEW128x64.show(
    item,
    3
    )
    item += 1
    basic.pause(1000)
})