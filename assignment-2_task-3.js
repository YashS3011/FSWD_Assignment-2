const studySessions = []

function addSession(topic, sessionTime, duration) {
    try {
        if (!topic || !sessionTime || !duration) {
            console.log("All fields are required...")
        }

        studySessions.push({ topic, sessionTime, duration })
        console.log('Session added successfully:', { topic, sessionTime, duration });
    } catch (err) {
        console.log(err)
    }
}

addSession("Math",new Date("2025-01-05T10:00:00"),60)
addSession("Java",new Date("2025-01-05T15:00:00"),90)
addSession("DAA",new Date("2025-01-06T10:00:00"),120)

function listTodaysSessions() {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    return studySessions.filter(
        (session) => session.sessionTime >= startOfDay && session.sessionTime < endOfDay
    );
}

console.log("Today's Session : ",listTodaysSessions())

function sessionCountdown(topic, countdownTime) {
    setTimeout(() => {
        console.log(`Session on [${topic}] starts now!`);
    }, countdownTime);
}

sessionCountdown('Math', 5000);

async function fetchStudyMaterials(topic) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve(`Study materials for [${topic}] fetched successfully!`);
            } else {
                reject(new Error(`Failed to fetch study materials for [${topic}].`));
            }
        }, 2000);
    })
        .then((message) => console.log(message))
        .catch((error) => console.error(error.message));
}

fetchStudyMaterials('DAA')