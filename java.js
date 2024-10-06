function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function showContent(contentId) {
    // Implement your content display logic here
    console.log("Show content for:", contentId);
}

function fwd() {
    location.assign('./java.html');
}

function bwd() {
    location.assign('./summer.html');
}
function toggleSection(id) {
    var section = document.getElementById(id);
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  }
  
  function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }
  

// Display content based on the clicked section or dropdown item
function showContent(sectionId) {
    const contentArea = document.getElementById('content-area');

    // Define content for each section
    const sectionContent = {
        home1: `<h2>Home Section 1</h2><p>This is the content for Home Section 1.</p>`,
        topic1: `<h2>Topic 1</h2><p>This is the content for Topic 1 from the dropdown.</p>`,
        topic2: `<h2>Topic 2</h2><p>This is the content for Topic 2 from the dropdown.</p>`,
        topic3: `<h2>Topic 3</h2><p>This is the content for Topic 3 from the dropdown.</p>`,

        //history of java//
        histroyOfJava: `<h2>HISTORY OF JAVA <h2/><p> Java was developed by Sun Microsystems in the mid-1990s, with the initial release in 1995. Created by James Gosling and his team,Initially called "Oak," 
        it was renamed Java in 1995 after a type of coffee. Java quickly gained popularity due to its platform independence, object-oriented nature, and robustness. Over the years, Java evolved through various versions, with Java 2 (released in 1998) introducing the popular Standard, Enterprise, and Micro Editions.
       In 2010, Oracle Corporation acquired Sun Microsystems, taking over Java's development. Java has become a widely used programming language, particularly for web, mobile, and enterprise applications, with Android development relying heavily on Java. 
        Java is a versatile language supporting both structured and object-oriented programming. Initially designed for embedded systems, it became a general-purpose language, known for its platform independence via the Java Virtual Machine (JVM). Structured programming in Java uses modular code with functions, while object-oriented programming focuses on classes and objects to model real-world entities and promote code reuse. Its adaptability makes Java widely used in web, mobile, and enterprise applications.</p>`,
       
       //features of java//
        FeaturesJava: `<h2> FEATURES OF JAVA <h2/><p> Platform Independence: Java’s "write once, run anywhere" philosophy allows programs to run on any device with a Java Virtual Machine (JVM), regardless of the underlying hardware or operating system.</p>
        <p>Object-Oriented: Java follows the object-oriented programming model, focusing on objects and classes to model real-world entities. It supports key OOP concepts like inheritance, encapsulation, polymorphism, and abstraction.</p>
        <p>Secure: Java provides a secure runtime environment with features like bytecode verification, security managers, and garbage collection, making it ideal for network-based applications.</p>
        <p>Robust: Java has strong memory management and exception handling, which helps prevent crashes or unexpected behavior. It includes automatic garbage collection to handle memory deallocation.</p>
        <p>Multithreaded: Java natively supports multithreading, allowing multiple tasks to run concurrently within a single program, improving performance, especially in large-scale applications.</p>
       <p>Portable: Java’s portability stems from its architecture-neutral nature. Java programs can run on any device or platform that supports the JVM.</p>`,
       
       //installation//
       Instalation: `<h2> INSTALLATION <h2/><p> For Windows:
Download the JDK:

Go to the Java SE Downloads page (choose the version you need).
Accept the license agreement and download the installer for Windows.
Run the Installer:

Double-click the downloaded .exe file.
Follow the installation prompts. You can choose the default settings or customize them.</p>

<p>For macOS:
Download the JDK:

Visit the Java SE Downloads page.
Download the macOS installer (.dmg file).
Run the Installer:

Open the downloaded .dmg file and follow the installation instructions.</p>
<p>Install OpenJDK (recommended):

Open a terminal and run the following command based on your distribution:

Ubuntu/Debian:

bash
Copy code
sudo apt update
sudo apt install openjdk-11-jdk
Fedora:

bash
Copy code
sudo dnf install java-11-openjdk-devel
CentOS/RHEL:

bas
Copy code
sudo yum install java-11-openjdk-devel
Verify Installation:

Open the terminal and type java -version. You should see the installed Java version.</p>
`,

//set path//
        PAth: `<h2> path<h2/><p> Set Up Environment Variables:Right-click on "This PC" or "My Computer" and select "Properties."Click on "Advanced system settings."Click the "Environment Variables" button.Under "System variables," find the Path variable and click "Edit."Add the path to the JDK bin directory (e.g., C:\Program Files\Java\jdk-11\bin).Click OK to close all dialog boxes.Verify Installation:Open Command Prompt and type java -version. You should see the installed Java version.</p><p>Set Up Environment Variables (Optional):You might need to set up your JAVA_HOME variable. Open Terminal and add the following line to your ~/.bash_profile or ~/.zshrc file (adjust the version number as needed):bas Copy codeexport JAVA_HOME=$(/usr/libexec/java_home)Verify Installation:Open Terminal and type java -version. You should see the installed Java version.</p>`,

//jdk,jre.//

        jdk:`<h2> JDK,JRE,JVM,JIT <h2/><p> JDK (Java Development Kit)
Definition: The JDK is a software development kit that provides tools necessary for developing Java applications.
Components: It includes the following:
JRE: The Java Runtime Environment, which allows you to run Java applications.
Development Tools: Compilers (like javac), debuggers, and other tools to write and test Java code.
Usage: Developers use the JDK to create Java programs. It is essential for compiling and packaging Java applications.</p>
<p>JRE (Java Runtime Environment)
Definition: The JRE is a part of the Java software that provides the environment to run Java applications.
Components: It includes:
JVM: The Java Virtual Machine, which executes Java bytecode.
Libraries: A set of pre-built libraries and classes that Java applications use.
Usage: Users who want to run Java applications on their machines need the JRE. It does not include development tools like compilers.</p>
<p>JVM (Java Virtual Machine)
Definition: The JVM is an abstract computing machine that enables a computer to run Java programs.
Functionality:
It converts Java bytecode (produced by the Java compiler) into machine code that can be executed by the underlying operating system.
It provides features like memory management (including garbage collection) and platform independence.
Usage: Every Java application runs on a JVM, regardless of the hardware or operating system.</p>
<p>JIT (Just-In-Time) Compilation is a technique used by the Java Virtual Machine (JVM) to improve the performance of Java applications. It converts Java bytecode into native machine code at runtime. The JVM identifies frequently executed methods and compiles them, allowing for faster execution by the CPU. JIT also optimizes code based on usage patterns, making it effective for long-running applications. Overall, JIT enhances the efficiency and speed of Java programs.</p>`,

//litreals//
literals:`<h2> lirels <h2/><p> In Java, literals are fixed values that are represented directly in the source code. They can be of various data types, and they are used to represent constant values in programs. Here are the main types of literals in Java:

Integer Literals: Represent whole numbers. They can be in decimal (base 10), hexadecimal (base 16), or binary (base 2) formats.

Example:
Decimal: 42
Hexadecimal: 0x2A
Binary: 0b101010
Floating-Point Literals: Represent decimal numbers. They can be written in standard decimal notation or in scientific notation.

Example:
Standard: 3.14
Scientific: 2.5e3 (which means 
2.5
×
1
0
3
2.5×10 
3
 )
Character Literals: Represent single characters enclosed in single quotes.

Example: 'A', 'b', '\n' (newline character)
String Literals: Represent a sequence of characters enclosed in double quotes.

Example: "Hello, World!"
Boolean Literals: Represent the two truth values in Java: true and false.

Example:
true, false
Summary
Literals are essential in Java for defining constant values directly in the code, facilitating easier understanding and readability.</p>`,
        
//primitive..//
datatypes:<h2>DATATYPES</h2>
    };

    // Check if the sectionId exists and update content area
    if (sectionContent[sectionId]) {
        contentArea.innerHTML = sectionContent[sectionId];
    } else {
        contentArea.innerHTML = `<h2>Error</h2><p>Content could not be loaded.</p>`;
    }

    // Hide all dropdowns after selecting an item
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
    });
}



