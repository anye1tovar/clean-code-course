(() => {



    type Gender = 'F' | 'M'
    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public bithdate: Date
        ) { }
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public rol: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate)
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenedFolder: string,
            email: string,
            rol: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(email, rol, name, gender, birthdate)
        }

    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'a@a.com',
        'admin',
        'Angelica',
        'F',
        new Date(1998 - 09 - 09)
    )
    console.log(userSettings);


    const newPerson = new Person('Angelica', 'F', new Date('1998-10-21'));
    console.log(newPerson);

})();