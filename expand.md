1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)

   so the code is readable. it's like using good variable names

2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?

   custom attributes for storing my own metadata with elements. in JS, access them with `element.dataset.attributeName`. wtf is a microdatum

3. What is a DOM fragment? Why are they powerful?

   dom fragment is like wrapper, fake parent element that lets you add multiple elements to an element at once without causing a DOM update after each element added

4. What is the point of a “Virtual DOM”? What do you gain? What do you lose?

   idk tbh, you probably gain like.. boxability? whatsitcalled. containerization? but you lose simplicity

5. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?

   `class` is a reserved word. i think before they changed it, you weren't allowed to do `obj.class` and with other keywords

6. What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?

   it's `onclick` unless you're using react. `addEventListener` lets you keep the listener private (other library/code can't access it without access to the function itself) and add multiple event listeners. some events like `DOMContentLoaded` are `addEventListener`-only. also, `addEventListener` lets you set options like `passive` and `once`. `onclick` is very easy to overwrite to `null` if needed; there can only be one event handler set with an `on` property
