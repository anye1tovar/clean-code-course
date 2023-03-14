(() => {



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
        person: PersonProps;
        rol: string;
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public rol: string;
        constructor({ email, rol, person }: UserProps
        ) {
            super(person)
            this.lastAccess = new Date();
            this.email = email;
            this.rol = rol;
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenedFolder: string;
        user: UserProps;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenedFolder: string;
        constructor(
            { workingDirectory, lastOpenedFolder, user }: UserSettingsProps
        ) {
            super(user);
            this.workingDirectory = workingDirectory;
            this.lastOpenedFolder = lastOpenedFolder;
        }
    }


    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenedFolder: '/home',
        user: {
            email: 'a@a.com',
            rol: 'admin',
            person: {
                name: 'Angelicaaaa',
                gender: 'F',
                birthdate: new Date(1998 - 09 - 09)
            }
        }
    })
    console.log(userSettings);
})();