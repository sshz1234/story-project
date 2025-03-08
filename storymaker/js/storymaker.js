// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
        -------------------------------------------------- */
        // Constants for main button query selectors
        const noun1Button = document.querySelector('#noun1');
        const verbButton = document.querySelector('#verb');
        const adjectiveButton = document.querySelector('#adjective');
        const noun2Button = document.querySelector('#noun2');
        const settingButton = document.querySelector('#setting');

        // Constants for p tag to display query selectors
        const choosenNoun1Paragraph = document.querySelector('#choosenNoun1');
        const choosenVerbParagraph = document.querySelector('#choosenVerb');
        const choosenAdjectiveParagraph = document.querySelector('#choosenAdjective');
        const choosenNoun2Paragraph = document.querySelector('#choosenNoun2');
        const choosenSettingParagraph = document.querySelector('#choosenSetting');

        // Constants for final buttons and p tags
        const playbackButton = document.querySelector('#playback');
        const randomButton = document.querySelector('#random');
        const storyParagraph = document.querySelector('#story');

        // Variables for pre-defined arrays
        const noun1Array = ['The turkey', 'mom', 'dad','The dog', 'The teacher', 'The teacher','The cat'];
        const verbArray = ['sat on', 'ate', 'danced with','saw','doesnt like', 'kissed'];
        const adjectiveArray = ['funny', '', 'scary', 'goofy','a slimy','a barking','a fat'];
        const noun2Array = ['goat', 'monkey', 'fish','cow','frog', 'bug', 'worm' ];
        const settingArray = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoe'];

        // Variables for count to grab array elements
        let noun1num = 0;
        let verbnum = 0;
        let adjectivenum = 0;
        let noun2num = 0;
        let settingnum = 0;

        /* Functions
        -------------------------------------------------- */
        function insertStudentId() {
            const studentIdParagraph = document.querySelector('#studentId');
            studentIdParagraph.textContent = 'Your Student ID/Name'; // Replace with your actual ID/name
        }
        function noun1_on_click() {
            noun1num = (noun1num + 1) % noun1Array.length;
            choosenNoun1Paragraph.textContent = `Noun 1: ${noun1Array[noun1num]}`;
        }

        function verb_on_click() {
            verbnum = (verbnum + 1) % verbArray.length;
            choosenVerbParagraph.textContent = `verb: ${verbArray[verbnum]}`;
        }
        

        function adjective_on_click() {
            adjectivenum = (adjectivenum + 1) % adjectiveArray.length;
            choosenAdjectiveParagraph.textContent = `Adjective: ${adjectiveArray[adjectivenum]}`;

        }

        function noun2_on_click() {
            noun2num = (noun2num + 1) % noun2Array.length;
            choosenNoun2Paragraph.textContent = `Noun 2: ${noun2Array[noun2num]}`;
        }

        function setting_on_click() {
            settingnum = (settingnum + 1) % settingArray.length;
            choosenSettingParagraph.textContent = `Setting: ${settingArray[settingnum]}`;
        }

        function playback_on_click() {
            // Concatenate user story and display
            const userStory = `Once upon a time, there was a ${noun1Array[noun1num]} who ${verbArray[verbnum]} in a ${adjectiveArray[adjectivenum]} way. The ${noun1Array[noun1num]} lived near a ${noun2Array[noun2num]} ${settingArray[settingnum]}.`;
            storyParagraph.textContent = userStory;
        }

        function random_on_click() {
            // Grab random elements from arrays, concatenate, and display
            const randomStory = `Once upon a time, there was a ${noun1Array[Math.floor(Math.random() * noun1Array.length)]} who ${verbArray[Math.floor(Math.random() * verbArray.length)]} in a ${adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)]} way. The ${noun1Array[Math.floor(Math.random() * noun1Array.length)]} lived near a ${noun2Array[Math.floor(Math.random() * noun2Array.length)]} ${settingArray[Math.floor(Math.random() * settingArray.length)]}.`;
            storyParagraph.textContent = randomStory;
        }

        /* Event Listeners
        -------------------------------------------------- */
       noun1Button.addEventListener('click', noun1_on_click);
        verbButton.addEventListener('click', verb_on_click);
        adjectiveButton.addEventListener('click', adjective_on_click);
        noun2Button.addEventListener('click', noun2_on_click);
        settingButton.addEventListener('click', setting_on_click);
        playbackButton.addEventListener('click', playback_on_click);
        randomButton.addEventListener('click', random_on_click);
    
        
