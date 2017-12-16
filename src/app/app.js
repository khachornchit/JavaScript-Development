import PlutoSols from 'plutosols-greeting';
var plutosols  = new PlutoSols();

(
    function() {
        plutosols.SetName('Sophia', 'new world !');
        plutosols.Greeting();
        plutosols.AddElement(plutosols.Hr());
        plutosols.AddElement(plutosols.Text('Hellooooooooooooooooooooooo'));
    }
)();