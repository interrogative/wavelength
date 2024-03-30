local a = {"hi", "hello", "ohio sigma"}

function thing() 
    while wait() do
    print(a[math.floor(math.random(1, 3))])
    wait(0.2)
    end
end

thing()
