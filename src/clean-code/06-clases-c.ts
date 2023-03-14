(() => {

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composición frente a la herencia

    type Gender = 'F' | 'M'

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;
        constructor({ name, gender, birthdate }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;

        }
    }

    interface UserProps {
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;
        constructor({ email, role }: UserProps
        ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenedFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenedFolder: string;
        constructor(
            { workingDirectory, lastOpenedFolder }: SettingsProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenedFolder = lastOpenedFolder;
        }
    }

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenedFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings

        constructor({
            workingDirectory,
            lastOpenedFolder,
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenedFolder });
        }
    }


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenedFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });
})();