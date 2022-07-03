import Button from "./Button";

function App(){
  const palavras_chave = [
    {button1: "linux"}, 
    {button1: "docker"}, 
    {button1: "server"},
    {button1: "rails"},
    {button1: "douane"},
    {button1: "my-developments"}, 
    {button1: "command-line"},
    {button1: "ruby"},
    {button1: "c-2"},
    {button1: "linux-on-mac"}, 
    {button1: "maintenance"}, 
    {button1: "security"},
    {button1: "gnome"},
    {button1: "kubernetes"},
    {button1: "mes-developpements"},
    {button1: "ubuntu"},
    {button1: "python"},
    {button1: "vcs"},
    {button1: "capybara"},
    {button1: "contribution"},
    {button1: "git"},
    {button1: "apt"},
    {button1: "bazaar"},
    {button1: "chef"},
    {button1: "cucumber"}, 
    {button1: "debian"},
    {button1: "game"},
    {button1: "howto"},
    {button1: "packaging"},
    {button1: "testing"},
    {button1: "boost"},
    {button1: "debug"},
    {button1: "devise"},
    {button1: "elixir"},
    {button1: "gtk"},
    {button1: "homebrew"},
    {button1: "information"},
    {button1: "ssh"},
    {button1: "tuxtremsplit"},
    {button1: "xpath"}
  ]

  return (
    <div className="pai">
      {palavras_chave.map((button) => {
        return <Button button1={button.button1}/> 
      })
      }
    </div>
  )
}
export default App;