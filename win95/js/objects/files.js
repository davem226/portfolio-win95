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
        "Contact Info"
    ],
    ext: null,
    anchor: null,
});
Files.push(cDrive);