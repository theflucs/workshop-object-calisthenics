# Object Calisthenics Workshop
In this repository you can find all the exercises for the Object Calisthenics Workshop, by Dev Dojo IT.

## Object Calisthenics? What was that?
Object Calisthenics is a programming exercise and a set of coding rules designed to promote better object-oriented code through constraint-based training. The term "calisthenics" comes from physical exercise, suggesting that these rules act as programming exercises to strengthen your coding abilities and discipline.
### Core Concept
Object Calisthenics consists of 9 specific rules that force developers to write code with better:

- Encapsulation
- Maintainability
- Readability
- Testability
- Reusability

These rules were initially formulated by Jeff Bay in the book "ThoughtWorks Anthology" and are meant to be challenging constraints that push developers to think differently about how they structure their code.

### The 9 Rules of Object Calisthenics

#### One level of indentation per method
Forces you to break down complex methods into smaller, focused ones


#### Don't use the ELSE keyword
Encourages early returns and polymorphism over conditional logic

#### Wrap all primitives and strings
Promotes domain modeling by creating meaningful types instead of using raw primitives


#### First-class collections
Collections should be wrapped in their own class with behaviors specific to what the collection contains


#### One dot per line
Prevents method chaining and the "train wreck" pattern, enforcing the Law of Demeter


#### Don't abbreviate
Names should be clear, descriptive, and unabbreviated


#### Keep all entities small
Classes should be no more than 50 lines and packages no more than 10 files


#### No classes with more than two instance variables
Forces you to think harder about proper decomposition and cohesion


#### No getters/setters/properties
Tell, don't ask - objects should expose behavior, not state



### Purpose and Benefits
The strict rules of Object Calisthenics aren't necessarily meant to be followed in all production code. Rather, they serve as:

- A training exercise to develop better coding habits
- A way to identify code smells and weaknesses in design
- A tool to push developers toward more object-oriented thinking
- A practical approach to reinforce SOLID principles

When developers practice these constraints, they often discover new patterns and approaches that can improve their everyday coding practices, even when not strictly adhering to all nine rules.

Object Calisthenics ultimately helps developers write more maintainable code by building muscle memory for good object-oriented design principles.