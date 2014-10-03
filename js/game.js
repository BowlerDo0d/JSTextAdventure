var textAdventure = {
    
    gameElements: {
        game_area: document.getElementById("gameArea"),
        command: document.getElementById("command"),
        suggest: document.getElementById("suggest"),
        send_btn: document.getElementById("sendBtn")
    },

    init: function() {
        console.log(this.gameElements);
        var e = this.gameElements;

        // Game commands could be entered in two ways: Enter key, Send button
        e.send_btn.addEventListener('click', function(e) {
            runCommand();
        });

        e.command.addEventListener('keypress', function(e) {
            var key = e.keyCode || 0;
            if (key === 13) { // Key code '13' is 'Enter'
                runCommand();
            }
        });

        setFocus();
    },

    setFocus: function() {
        // We always want the focus on the command line
        command.focus();
    },

    runCommand: function() {
        // If there is a command entered, run it
        if (command.value) {
            game_area.innerHTML = command.value;
            command.value = '';
        }
        // Always keep focus on command line
        setFocus();
    }
};

window.onload = textAdventure.init;
