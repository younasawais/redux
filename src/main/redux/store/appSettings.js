import { createStore} from 'redux';

// const fullLibrary = {
//   word : ["suffice","contribution","conduct","contingency","compel","privilege","constrain","instigate","provoke","despair","empathy","infiltration","unlike","recall",
//           "rectify","theocracy","stance","delicate","superstition","distorted","contention","scenario","prosperity","opponent","overwhelming","proponents","impeach","compartments",
//           "on behalf of","divisive","contrary","hence","setback","evidently","manifest","delegation","pessimism","counter measure","preoccupied","convenient","as such", "austerity",
//           "feasible","flaws","legacy","contrast","approach","hypothetical","confront","sceptical","perhaps","despite","sufficient","ambiguous","accelerate",
//           "discourse","views","factions","animosity","shortsighted","insurgency","clear-cut","remarkable","moratorium","confession","comprise","provoke","inform","supersede",
//           "evaluate","candor"],
//   translation1 :["voldoen","bijdrage","gedrag","onvoorziene","dwingen","gunst","beperken","aansporen","uitlokken","wanhoop","inleveringsvermogen",
//                 "binnendringen","in tegenstelling","herinner","herstellen","","houding","gevoelig","bijgeloof","vervormd","strijd","","welvaart","tegenstander","(very great in amount.)",
//                 "voorstanders","beschuldigen","vakjes","namens","verdeeldheid","tegendeel","dus","tegenslag","klaarblijkelijk","settle","staatsrepresenteurs","negatiefdenkend",
//                 "tegenmaatregel","bezorgd","gemakkelijk","als zodanig","strengheid","uitvoerbaar/haalbaar","gebreken","erfenis","tegengesteld","aanpak","stel","tegengaan",
//                 "twijfelend","misschien","ondanks","voldoende","dubbelzinnig","versnellen","preek/speech","denkwijze","partijen","vijandigheid","kortzichtig","opstand","duidelijk",
//                 "opmerkelijk","verbode","bekentenis","omvatten/bevat","opwekken","melden","vervangen","schatten","openhartigheid"],
//   translation2 : ["volstaan","","houding","","","","","","","","","","","","","","","","","","bewering","","","","","","","","","","","","","","","","","","",
//                   "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
//   synonym : ["enough","donation","behaviour","eventuality","","advantage","","provoke","to anger","","","","","","","church-state","attitude","","","","","situation",
//             "","","overpowering","","","","","","","","","obviously/apparently","settle","","","","","","","","","","inheritance","","","","oppose","doubtful","maybe","notwithstanding",
//             "enough","obscure","speed up","conversation","","","","","","sharply defined","extraordinary","","acknowledgment","","","","replace","assess","directness"],
//   definition1 : ["be enough or adequate","a gift or payment to a common fund or collection","personal behavior; way of acting","a future event or circumstance that is possible but cannot be predicted with certainty","to force or drive, especially to a course of action","a special right, advantage, or immunity granted or available only to a particular person or group of people.","to force or drive, especially to a course of action","bring about or initiate (an action or event).","to incite or stimulate (a person, animal, etc.) to action. ","the complete loss or absence of hope.","the ability to understand and share the feelings of another.","to filter into or through; permeate. ","dissimilar or different from each other.","bring (a fact, event, or situation) back into one's mind, especially so as to recount it to others; remember.","put (something) right; correct.","religous ruling system","a mental or emotional position adopted with respect to something","very fine in texture or structure; of intricate workmanship or quality","excessively credulous belief in and reverence for supernatural beings.","pulled or twisted out of shape; contorted","a struggling together in opposition; strife. ","an imagined or projected sequence of events, especially any of several detailed plans or possibilities: ","a successful, flourishing, or thriving condition, especially in financial respects; good fortune. ","a person who is on an opposing side in a game, contest, controversy, or the like; adversary. ","so great as to render resistance or opposition useless","a person who puts forward a proposition or proposal. ","to accuse (a public official) before an appropriate tribunal of misconduct in office.","a part or space marked or partitioned off.","as a representative of or a proxy for","forming or expressing division or distribution. ","opposite in nature or character; diametrically or mutually opposed","as an inference from this fact; for this reason; therefore","a check to progress; a reverse or defeat","it is plain that; it would seem that.","to make clear or evident to the eye or the understanding; show plainly","the body of people chosen to represent a political unit, as a state, in an assembly","a lack of hope or confidence in the future.","","completely engrossed in thought; absorbed. ","suitable or agreeable to the needs or purpose; well-suited with respect to facility or ease in use; favorable, easy, or comfortable for use. ","","severity of manner, life, etc. sternness.","capable of being done, effected, or accomplished","a feature that mars the perfection of something; defect; fault: ","anything handed down from the past, as from an ancestor or predecessor","to compare in order to show unlikeness or differences; note the opposite natures, purposes, etc., of: ","the method used or steps taken in setting about a task, problem","a suppose situation","to face in hostility or defiance","doubtful about a particular thing","","","adequate for the purpose ","of doubtful or uncertain nature; difficult to comprehend, distinguish, or classify: ","","communication of thought by words","a particular manner of looking at something","a group or clique within a larger group, party, government, organization, or the like","a feeling of strong dislike towards someone","lacking in foresight","rebellion within a group, as by members against leaders.","formed with or having clearly defined outlines","notably or conspicuously unusual ","a suspension of activity","a formal, usually written, acknowledgment of guilt by a person accused of a crime.","to include or contain, to consist of","to anger, enrage, exasperate, or vex","to give or impart knowledge of a fact or circumstance to","take the place of ,a person or thing previously in authority or use","form an idea of the amount, number, or value of; assess","the state or quality of being frank, open, and sincere in speech or expression; candidness"],
//       definition2 : ["","","the manner in which a person behaves, especially on a particular occasion or in a particular context.","dependence on chance or on the fulfillment of a condition; uncertainty; fortuitousness","o secure or bring about by force.","a grant to an individual, corporation, etc., of a special right or immunity, under certain conditions. ","severely restrict the scope, extent, or activity of.","to cause by incitement","to stir up, arouse, or call forth (feelings, desires, or activity)","someone or something that causes hopelessness","the imaginative ascribing to an object, as a natural object or work of art, feelings or attitudes present in oneself","to move into (an organization, country, territory, or the like) surreptitiously and gradually, especially with hostile intent","different, dissimilar, or unequal; not alike","","","a system of government in which priests rule in the name of God or a god","","","","","strife in debate; dispute; controversy. ","","","","","a person who argues in favor of something; an advocate. ","to call to account.","a separate room, section, etc","in the interest or aid of (someone)","creating dissension or discord. ","","","","plainly or obviously; in a way that is clearly seen or understood.","","","","","","","","","","","","","","","","","","","","open to or having several possible meanings or interpretations; equivocal","","","","","","","","easy to perceive or understand","","an authorized period of delay or waiting. ","","","","","to replace in power, authority, effectiveness, acceptance, use, etc., as by another person or thing.","to determine or set the value or amount of; appraise","the quality of being open and honest in expression; frankness."],
//   example1 : ["a quick look should suffice","charitable contributions","the conduct of the police during the riot","He was prepared for every contingency.","His disregard of the rules compels us to dismiss him.","education is a right, not a privilege","He was constrained to admit the offense.","they instigated a reign of terror","The mishap provoked a hearty laugh.","driven to despair , he throws himself under a train","Such a metaphor betrays a complete lack of understanding, of empathy with Victorian culture.","The troops infiltrated the enemy lines.","they seemed utterly unlike, despite being twins","I can still vaguely recall being taken to the hospital","mistakes made now cannot be rectified later","Iran has made the transition in the last twenty years from a nominal constitutional monarchy to a democratic theocracy","They assumed an increasingly hostile stance in their foreign policy.","a spider's web, strong yet delicate","he dismissed the ghost stories as mere superstition","his report gives a distorted view of the meeting","So even back then, this was an obvious point of concern and contention. ","","Prior to that, he spent years as a vice president at the influential conservative non-profit Americans for prosperity. ","As the campaign season heated up, his opponent hammered away on the issue. ","The temptation to despair may become overwhelming.","The government of Borno State has been a proponent of the Civilian JTF. ","Every call, all over the country, men and women, all said the same thing: impeach him","the compartments of the human mind.","I would like to show this example on behalf of my friend","Johnson knew that the proposals he was going to send to the Hill would be divisive.","he ignored contrary advice and agreed on the deal","The eggs were very fresh and hence satisfactory","The new law was a setback.","He evidently believes that control of the 777 was taken over by somebody who gained access to the cockpit. ","the system's manifest failings","Our club sent a delegation to the rally.","His pessimism about the future of our country depresses me.","","his mother was preoccupied with paying the bills","","","","a feasible plan.","flaws in the law","Unfortunately, this is more about protecting the legacy of a great man.","Contrast the political rights of Romans and Greeks.","His approach to any problem was to prepare an outline","The Secretary of Defense refused to discuss hypotheticals with the reporters.","The feuding factions confronted one another.","My teacher thinks I can get a scholarship, but I'm skeptical.","","","sufficient proof; sufficient protection.","an ambiguous answer.","","","From a practical view, the situation presents several problems.","a faction in favor of big business","he no longer felt any animosity toward hem","a shortsighted plan","Rather, the revolution was brought there by certain elements of the insurgency.","","a remarkable change.","a moratorium on the testing of nuclear weapons.","a confession of incompetence.","","What could have provoked such an incident?","He informed them of his arrival.","the older models have now been superseded","to evaluate property","a man of refreshing candor"],
//   example2 : ["","","","a detailed contract that attempts to provide for all possible contingencies","Which brings us to the images that compel our attention today. ","the privileges of the very rich.","Cold weather constrained the plant's growth.","Republicans will continue to avoid a grand bargain and instigate crises. ","What could have provoked such an incident?","He is the despair of his mother.","By means of empathy, a great painting becomes a mirror of the self.","The intelligence agency infiltrated three spies into the neighboring country.","They contributed unlike sums to charity.","","","","My stance at this point is that the audience can decide for themselves. ","","","Then he took a few steps in her direction, his face distorted with rage","But that was so yesterday, much like his contention that he lacked the power to unilaterally confer amnesty.","","So enter billionaires two and three: Charles and David Koch and their Americans for prosperity group. ","","An overwhelming amount of subtleties and implications were going over my head. ","","Within the House Judiciary Committee, six Republicans voted with 21 Democrats to impeach the president. ","The EFPs were hidden in a compartment under an unassuming-looking house. ","","The Democrats were able to sideline Kucinich and avoid a divisive impeachment battle. ","","Sun is hot, hence it will warm up the earth","a serious setback for the peace process","evidently Mrs. Smith thought differently","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","They superseded the old statute with a new one","when you evaluate any hammer, look for precision machining","to consider an issue with candor"],
//   category : ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
//   type : ["verb","noun","noun","noun","verb","noun","verb","verb","","noun","noun","noun","noun","verb","verb","noun","noun","noun","noun","verb","noun","noun","noun","noun","noun","noun","verb","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","verb","noun","noun","noun","noun","noun","noun","noun","noun","noun","noun","verb","verb","verb","verb","verb","noun"]
// }


// const settings = {
//   appStatus        : 'Default',
//   totalWrong       : 0,
//   totalRight       : 0,
//   startRange       : 1,
//   endRange         : 10,
//   answers          : 8,
//   mode             : 'wordToTranslation',
//   random           : 'No',
//   category         : '',
//   comment          : 'Press Start or go to setup',
//   selectedAnswer   : '',
//   temp             : '',
// }

// const viewObjects = {
//   divAnswersView        : 'visible',
//   divSettingsView       : 'visible',
//   divDebugView          : 'visible',
//   divControlButtonView  : 'visible',
//   divCommentsView       : 'visible',
//   divGivenInfoView      : 'visible',
//   divSettingsView       : 'visible',
//
//   correctView           : 'visible',
//   inCorrectView         : 'visible',
//   commentLine1View      : 'visible',
//   commentLine2View      : 'visible',
//   commentLine3View      : 'visible',
//   commentLine1Value     : 'Press Start or go to setup',
//   commentLine2Value     : 'visible',
//   commentLine3Value     : 'visible',
//   controlsButtonValue   : 'START',
//   controlsButtonView    : 'visible',
//
// }
// const libraryFiltered = {
//   word          : [],
//   translation1  : [],
//   translation2  : [],
//   synonym       : [],
//   definition1   : [],
//   definition2   : [],
//   example1      : [],
//   example2      : [],
//   category      : [],
//   type          : [],
// }

const initialState = {
  settings         : settings,
  fullLibrary      : fullLibrary,
  libraryFiltered  : libraryFiltered,
  temp             : 'test'
}

const reducer = (state = initialState, action) => {
  //console.log('startrange',state.settings.startRange);
  let settings;
  let payloadTemp;
  switch (action.type) {
    case 'STARTRANGE':
        payloadTemp = action.payload.startRange;
        settings = {...state.settings, startRange : payloadTemp};
        return {...state, settings};  // eslint-disable-next-line
      break;
    case 'ENDRANGE':
        payloadTemp = action.payload.endRange;
        settings = {...state.settings, endRange : payloadTemp};
        return {...state, settings};  // eslint-disable-next-line
      break;
    case 'ANSWERS':
        payloadTemp = action.payload.answers;
        settings = {...state.settings, answers : payloadTemp};
        return {...state, settings};  // eslint-disable-next-line
      break;
    case 'RANDOM':
        payloadTemp = action.payload.random;
        settings = {...state.settings, random : payloadTemp};
        return {...state, settings};  // eslint-disable-next-line
      break;
    case 'MODE':
        payloadTemp = action.payload.mode;
        settings = {...state.settings, mode : payloadTemp};
        return {...state, settings};  // eslint-disable-next-line
      break;
    case 'CATEGORY':
        payloadTemp = action.payload.category;
        settings = {...state.settings, category : payloadTemp};
        return {...state, settings};  // eslint-disable-next-line
      break;
    case 'FILTEREDLIBRARY':
        let libraryFiltered = action.payload.filteredLibrary;
        return {...state, libraryFiltered};  // eslint-disable-next-line
      break;
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
