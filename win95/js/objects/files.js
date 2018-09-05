var Files = [];

var myComputer = new File({
    DOMlink: "my-computer",
    location: "Desktop",
    name: "My Computer",
    icon: "my-computer.jpg",
    isDir: true,
    files: ["3 1/2 Floppy (A:)", "(C:)"],
    ext: null,
    anchor: null,
});
Files.push(myComputer);

var floppyDrive = new File({
    DOMlink: "floppy-drive",
    location: "My Computer",
    name: "3 1/2 Floppy (A:)",
    icon: "floppy-drive.png",
    isDir: true,
    files: [
        "Meet Me in the Middle",
        "Guide to APIs",
        "Rupee Collector"
    ],
    ext: null,
    anchor: null,
});
Files.push(floppyDrive);

var cDrive = new File({
    DOMlink: "c-drive",
    location: "My Computer",
    name: "(C:)",
    icon: "c-drive.png",
    isDir: true,
    files: [
        "Github",
        "LinkedIn",
        "Contact"
    ],
    ext: null,
    anchor: null,
});
Files.push(cDrive);

var meetMeInTheMiddle = new File({
    DOMlink: "meet-me-in-the-middle",
    location: "3 1/2 Floppy (A:)",
    name: "Meet Me in the Middle",
    icon: "internet.png",
    isDir: false,
    files: null,
    ext: null,
    anchor: "https://davem226.github.io/MeetMeinTheMiddle/",
});
Files.push(meetMeInTheMiddle);

var guideToAPIs = new File({
    DOMlink: "guide-to-apis",
    location: "3 1/2 Floppy (A:)",
    name: "Guide to APIs",
    icon: "internet.png",
    isDir: false,
    files: null,
    ext: null,
    anchor: "https://github.com/davem226/Project-2/",
});
Files.push(guideToAPIs);

var rupeeCollector = new File({
    DOMlink: "rupee-collector",
    location: "3 1/2 Floppy (A:)",
    name: "Rupee Collector",
    icon: "internet.png",
    isDir: false,
    files: null,
    ext: null,
    anchor: "https://davem226.github.io/unit-4-game/",
});
Files.push(rupeeCollector);

var gitHub = new File({
    DOMlink: "git-hub",
    location: "(C:)",
    name: "Github",
    icon: "internet.png",
    isDir: false,
    files: null,
    ext: null,
    anchor: "https://github.com/davem226/",
});
Files.push(gitHub);

var linkedIn = new File({
    DOMlink: "linked-in",
    location: "(C:)",
    name: "LinkedIn",
    icon: "internet.png",
    isDir: false,
    files: null,
    ext: null,
    anchor: "https://www.linkedin.com/in/dave-morris-6274a327/",
});
Files.push(linkedIn);

var contact = new File({
    DOMlink: "contact",
    location: "(C:)",
    name: "Contact",
    icon: "text-file.png",
    isDir: false,
    files: null,
    ext: ".txt",
    anchor: null,
});
Files.push(contact);
