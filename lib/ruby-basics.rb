puts 'Hello, world'

def greet(name = 'bob')
  puts "Hi, #{name}!"
end

greet
greet()
greet('sally')
greet 'sally'
