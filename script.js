// Sample CPU data (replace with real API later)
const cpuData = [
    { name: "Intel i5-12600K", speed: 4.9, cores: 10 },
    { name: "Intel i7-13700K", speed: 5.4, cores: 16 },
    { name: "AMD Ryzen 5 5600X", speed: 4.6, cores: 6 },
    { name: "AMD Ryzen 7 5800X", speed: 4.7, cores: 8 }
];

const cpu1Dropdown = document.getElementById("cpu1");
const cpu2Dropdown = document.getElementById("cpu2");
const compareBtn = document.getElementById("compareBtn");
const resultDiv = document.getElementById("result");

// Populate dropdowns
cpuData.forEach(cpu => {
    const option1 = new Option(cpu.name, cpu.name);
    const option2 = new Option(cpu.name, cpu.name);
    cpu1Dropdown.add(option1);
    cpu2Dropdown.add(option2);
});

// Compare function
compareBtn.addEventListener("click", () => {
    const cpu1 = cpuData.find(cpu => cpu.name === cpu1Dropdown.value);
    const cpu2 = cpuData.find(cpu => cpu.name === cpu2Dropdown.value);

    if (cpu1 && cpu2) {
        resultDiv.innerHTML = `
            <p>${cpu1.name} vs ${cpu2.name}</p>
            <p>Clock Speed: ${cpu1.speed} GHz vs ${cpu2.speed} GHz</p>
            <p>Cores: ${cpu1.cores} vs ${cpu2.cores}</p>
            <p><b>${cpu1.speed > cpu2.speed ? cpu1.name : cpu2.name} is faster!</b></p>
        `;
    }
});
