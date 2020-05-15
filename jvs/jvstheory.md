# Javascript Theory

### Datatypes
- undefined : not assigned

functions that don't return, have a return value of 'Undefined.'
- null
- boolean
- string
- symbol : immutable symbol
- number
- object : Set of key-value pairs.

### Declare:
`var myName = "Abu";` Declare and assigned

later

`myName = 1;`

Apart from var you can use let

`let ourName = "Khan";`

let will only be used within a scope of declaration. but var can be used globally.

Or use const

`const num = 5;`

immutable

- Variable names are case sensitive

### To view in console

`console.log()`

### Math

- add `+`
- sub `-`
- div `/`
- mul `*`
- inc `var++`
- dec `var--`
- rem `%`
- shorthands are available

### Quote escapes
- use `\`
- double quotes within single quotes
- backticks \` \`

### Escapes

- `\'`
- `\"`
- `\\`
- `\n`
- `\r` Carriage return
- `\t`
- `\b` Backspace
- `\f` Formfeed

### strings

- concat with +
- concat with variables too
- length `string.length`

NO ()

- dereference: `str[i]`

- individual characters are immutable.

So,
`var myStr = "Jello World!"` followed by `myStr[0]= "H"` will produce an error.

Instead, need to reassign the variable as :

`myStr = "Hello World"`

That's okay.

- to find last letter: `str[str.length -1]`

### scope

- same as other languages
- Not using var keyword makes variables automatically global.
- var gives local scope in declaration enclosure
- Local takes precedence over global variables
