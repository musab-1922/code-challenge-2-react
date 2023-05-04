import React from "react";


function BotCard({ bot, handleBots, dischargeBot }) {
  return (
    <div className="ui column"
    style={{
      display:"inline-block"
      
    }}
    >
  <div
    className="ui card"
    key={bot.id}
    onClick={(event) => {
      event.stopPropagation()
      handleBots(bot)
    }}
    style={{
      background: "#f7f7f7",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      borderRadius: "10px",
      padding: "20px",
      cursor: "pointer"
      
    }}
  >
    <div className="image">
      <img alt="oh no!" src={bot.avatar_url} />
    </div>
    <div className="content">
      <div className="header" style={{color: "orange"}}>
        <p>Name</p> {bot.name}
      </div>
      <div className="meta text-wrap">
        <p>catchphrase</p> <small>{bot.catchphrase}</small>
      </div>
    </div>
    <div className="extra content">
      <div className="health">
        <i className="icon heartbeat" />
        <p style={{color: "green"}}>Health</p>  {bot.health}
      </div>
      <div>
        <i className="icon lightning" />
        <p style={{color: "red"}}>Damage</p> {bot.damage}
      </div>
      <div>
        <i className="icon shield" />
        <p style={{color: "blue"}}>Armor</p> {bot.armor}
      </div>
      <div className="ui center aligned segment basic">
        <button
          className="ui mini red button"
          onClick={(event) => {
            event.stopPropagation();
            dischargeBot(bot);
          }}
          style={{backgroundColor: "purple"}}
        >
          x
        </button>
      </div>
    </div>
  </div>
</div>

  )
        }

export default BotCard;