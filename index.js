
//author Najwa Alghamdi
// you can updae causal, wedding and meeting to match your closet 
const casual = ['mmmm. A jalabeyah?',
                'How about going casual. A white shirt and a pair of jeans.',
                'Go simple. A skirt and a T-shirt.',
                'How about a nice summer dress.',
                'Lets do pyjamas look today.'
                ]
const wedding = [ 'for a big wedding, wear your self portrait dress',
                  'for a big wedding do the escada dress'
                  ]
const small_wedding = ['for a small wedding, wear that Make dress.',
                      'do the red dress if its a small event.'
  ]

const meeting = ['Remember that nice skirt you got from Ferragamos. Do it with a white top. you will look great!',
                'How about your Zaras black suit?',
                'Go for the that Ted Baker fancy shirt with a black trouser.']  

exports.handler = (event, context, callback) => {
    switch (event.request.type) {
        case "LaunchRequest":
        context.succeed(
          generateResponse(
            buildSpeechletResponse("Hi, this is your wardrobe. how can I help", false)
          )
        )
            break;
        case "IntentRequest":
            switch (event.request.intent.name) {
                case "q":
                  context.succeed(generateResponse(buildSpeechletResponse(casual[Math.floor(Math.random() * casual.length)] + ". I always encourage doing a simple look. are you into that today", false)))
                    break;
                case "Wedding":
                   context.succeed(generateResponse(buildSpeechletResponse(wedding[Math.floor(Math.random() * wedding.length)] + ". are you satisfied", false)))
                    break;
                case "Meeting":
                  context.succeed(generateResponse(buildSpeechletResponse(meeting[Math.floor(Math.random() * meeting.length)] + ". are you satisfied", false)))
                 break;
                 case "goodbye":
                   context.succeed(generateResponse(buildSpeechletResponse("glad to hear that. I'm always here to help you. have a nice one. Goodbye",true)))
                  break;
                  case"AMAZON.HelpIntent":
                  context.succeed(generateResponse(buildSpeechletResponse("say what should i wear today",false)))
 
              
            }
            break;
    }
}


buildSpeechletResponse = (outputText, shouldEndSession) => {

  return {
    outputSpeech: {
      type: "PlainText",
      text: outputText
    },
    shouldEndSession: shouldEndSession
  }

}

generateResponse = (speechletResponse) => {

  return {
    version: "1.0",
    response: speechletResponse
  }

}
