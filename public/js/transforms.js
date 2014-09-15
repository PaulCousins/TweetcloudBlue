//NOW Use basic transform to confirm that it works.
//LATER Get the transforms from TweetcloudJS.com. (category t)
module.exports = function() {

	return {

		data: [
	
// RegExp pattern to match, consolidation word, Twitter query
["\d\d?(hrs|mins)"],
["able"],
["about"],
["above"],
["absolute(ly)?"],
["absurd(ly)?"],
["abt"],
["accept"],
["accomplish(es|ed|ing|ment|ments)?"],
["according"],
["across"],
["act(s|ed|ing|ion|ions|ive|ivity|ively)?"],
["actual(ly)?"],
["add(s|ed|ing|ition|this)?"],
["adjourn.*","adjourn"],
["adjust(s|ed|ing|ment|ments)?"],
["admin.*"],
["admi(t|ts|ted|tted|ting|ssion)"],
["adults?"],
["advice"],
["advis(e|es|ed|ing)"],
["affirm.*","affirm"],
["after"],
["again"],
["against"],
["age"],
["agenda"],
["ago"],
["agree(s|d|ing|ment|ments)?"],
["air"],
["alert"],
["all"],
["almost"],
["alone"],
["along"],
["already"],
["also"],
["although"],
["always"],
["ambassadors","ambassador"],
["amend.*","amend","amend OR amends OR amending OR amended OR amendment OR amendments"],
["american?a?s?","america","america OR american OR americans OR americas"],
["among"],
["amount(s|ed|ing)?"],
["analy(sis|ses)"],
["analyz(e|ed|es|ing)"],
["and"],
["announc.*"],
["another"],
["answer.*"],
["any"],
["any(more|one|thing)"],
["apparent.*"],
["appear.*"],
["appl(y|ies|ied|ying)"],
["appoint.*","appoint"],
["approach.*"],
["appropriat.*","appropriate"],
["approv.*"],
["are"],
["around"],
["arrest.+","arrest"],
["arriv.*"],
["articles?","article"],
["aside"],
["ask.*"],
["ass(es|hole|holes)?"],
["assum*."],
["astroturf.*","astroturf OR astroturfing"],
["attack.*"],
["attempt.*"],
["attain.*","attain"],
["attorneys?|attys?|lawyers?","attorney OR attorneys OR atty OR attys lawyer OR lawyers"],
["avoid.*"],
["away"],
["b\/c"],
["baby|babies","baby","baby+OR+babies"],
["back(s|ed|ing)?"],
["bad"],
["ban(s|ned|ning)?","ban","ban+OR+bans+OR+banned+OR+banning"],
["bank(s|ed|ing|er|ers)","bank","bank OR banks OR banked OR banking OR banker OR bankers"],
["bar(s|red|ring)?"],
["beat(s|en)?"],
["because"],
["be(come|comes|came|coming)"],
["been"],
["before"],
["beg(in|ins|an|ining|inings)"],
["behind"],
["being"],
["beliefs?"],
["believ.*"],
["belong.*"],
["best"],
["besides?"],
["better"],
["between"],
["beware"],
["bid(s|ded|ding)?"],
["big"],
["bigge(r|st)"],
["bills?","bill","bill OR bills"],
["bind(s|ing)","bind"],
["bits?"],
["bitch.*"],
["blam.*","blame","blame OR blames OR blamed OR blaming"],
["bless.*","bless","bless OR blesses OR blessed OR blessing"],
["block.*"],
["bonanzle"],
["books?"],
["both"],
["bound","bind"],
["break.*"],
["brings?"],
["broken?"],
["buen[ao]s?"],
["bullshit"],
["bus"],
["bus(y|ier|iest)"],
["but"],
["buy.*"],
["call.*"],
["came"],
["candidates?","candidate","candidate OR candidates"],
["can(not)?"],
["cancel.*"],
["car(es|ed|ing)"],
["cars?","car","car OR cars"],
["cases?"],
["catch(es|ing)?"],
["caught"],
["caus(e|ed|es|ing)"],
["centers?"],
["central.*"],
["challeng.*"],
["chang(e|es|ed|ing)"],
["check.*"],
["choices?|chooses?|chosen?|chosing"],
["citizens?"],
["cities"],
["city"],
["claims?"],
["close.*"],
["comes?"],
["coming"],
["commit.*"],
["como"],
["compensat.*","compensate"],
["con"],
["concur.*","concur"],
["connect.*"],
["congrat.*"],
["cons"],
["cont"],
["content"],
["(dis)?continu.*"],
["control(s|l.*)?"],
["controvers(y|ies|ial)"],
["convict.*","convict"],
["cool(s|ed|ing|er|est)?"],
["core"],
["costs?"],
["could"],
["course"],
["courts","court"],
["cover.*"],
["creat(e|es|ed|ing|ive|ively)"],
["crim(es|inal|inals|inally)","crime"],
["cuando"],
["cunts?"],
["current(ly)?"],
["cut(s|ted|ting)?"],
["daily"],
["damn.*"],
["das"],
["days?"],
["dead"],
["deal(s|t)"],
["dear"],
["debts","debt"],
["des"],
["deaths?"],
["decid(e|es|ed|ing)"],
["decisions?","decision"],
["declar(e|es|ed|ing)"],
["(un)?defeat(s|ed|ing)"],
["defen(d|ds|ded|ding|[cs]e(s|less)?)","defense"],
["del"],
["depend(s|ed|ing)?"],
["(un)?deserv.*"],
["despite"],
["destroy(s|ed|ing)?"],
["detect.*"],
["(un)?develop(s|ed|ing|ment|ments)?"],
["dia"],
["did"],
["die[sd]?"],
["dios?"],
["differ.*"],
["direct(s|ed|ing||or|ors|ly)?"],
["disapprov.*"],
["disclos(e|es|ed|ing|ure|ures)"],
["districts?"],
["does"],
["doing"],
["donde"],
["done"],
["dont"],
["dos"],
["down"],
["download"],
["driv(e|es|ing|er|ers)"],
["drop(s|ped|pings?)"],
["during"],
["duties","duty"],
["dying"],
["each"],
["edt"],
["either"],
["(un)?elect.*","elect"],
["else"],
["email(s|ed|ing)?"],
["end(s|ed|ings?)"],
["endors.+","endorse"],
["enemies","enemy"],
["enforc.*"],
["enjoy.*"],
["enough"],
["enumerat.*","enumerate"],
["ent(er|ers|ered|ering|ry|ries)"],
["(in|un)?equal(ly|s|ed|ity|ities)","equal"],
["es[aeo].*"],
["est[aeo].*"],
["establish.*"],
["etc"],
["even"],
["events?|eventual(ly)?"],
["ever"],
["every.*"],
["except"],
["execs?"],
["executives?","executive"],
["expir.*","expire"],
["explains?"],
["expos.*"],
["express"],
["face"],
["faced"],
["faces"],
["fact"],
["facts"],
["factor"],
["factors"],
["fail(s|ed|ing|ure|ures)?"],
["fair(ly)?"],
["fall(s|ing)?"],
["false(ly|hoods?)?"],
["famil(y|ies)","family"],
["(un)?familiar(ly|ity)?","familiar"],
["fans?"],
["far"],
["faves?"],
["favor(s|ed|ing|ite|ites)?"],
["fears?"],
["fed"],
["feed"],
["feel"],
["fell"],
["fellow"],
["few(er|est)?"],
["fight(s|ing)?"],
["fil(e|es|ed|ing|ings)"],
["finish.*"],
["firsts?"],
["(un)?follow.*"],
["for"],
["foreign"],
["forgets?"],
["forgot"],
["forgotten"],
["form"],
["formal(ly)?"],
["former(ly)?"],
["forward"],
["found"],
["frauds?|defraud.*|fraudulent(ly)?","fraud|.*fraud.*"],
["free(s|d|dom|doms|ly)?"],
["friends?"],
["from"],
[".*fuck.*.*"],
["full"],
["fund.*"],
["further"],
["future"],
["gain(s|ed|ing)?"],
["gains"],
["gave"],
["gets?"],
["getting"],
["girls?"],
["giv(e|en|es|ing)"],
["global"],
["go(es|ing|ne|nna)"],
["good"],
["goodbye"],
["got(ta|ten)?"],
["govern(s|ed|ing)?","govern"],
["government.+|govts?","government"],
["governors?","governor"],
["great.*"],
["group(s|ed|ing)?"],
["grow(s|ing|th)?"],
["guess(es|ed|ing)?"],
["guns?","gun"],
["guys?"],
["(ha)+"],
["had"],
["hand(s|ed|ing)?"],
["handl.+"],
["hard(er|est)?"],
["happen.*"],
["happ(y|ier|iest)"],
["has"],
["have"],
["having"],
["hay"],
["heard?"],
["hears"],
["held"],
["hell"],
["hello"],
["help.*"],
["her(self)?"],
["here(in)?"],
["hey"],
["high(er|est|ly)?"],
["him(self)?"],
["hir(e|es|ed|ing|ings)"],
["his"],
["histor(y|ic|ical|ically)"],
["hits?"],
["hold(ing|s)?"],
["homes?"],
["hop(e|es|ed|ing)","hope"],
["hopeless(ly|ness)","hopeless"],
["hot(ter|test)?"],
["houses","house"],
["housed","housing"],
["how"],
["hoy"],
["huge"],
["i\W(m|d|ll|ve)"],
["i.e"],
["idea(l|s)?"],
["idiot.+"],
["immigr.*","immigration"],
["impeach(es|ed|ing|ment|ments)","impeach"],
["important.*"],
["improv(e|es|ed|ing|ements?)"],
["inclu(de|des|ded|ding|sive|sion|sions)"],
["increas(e|es|ed|ing)","increase"],
["indicat.*"],
["info"],
["(un|mis|dis)?inform(s|ed|ing|ation|ative)?"],
["(un)?inhabit.*","inhabit"],
["insider?s?"],
["(un)?insur.*","insure"],
["intl|internationally","international"],
["into"],
["investigat.*"],"investigate",
["issue(d|s)?"],
["its"],
["it\W.*"],
["(ja)+"],
["jobs?"],
["join(s|ed|ing|t|ts)?"],
["judg(e|es|ed|ing|e?ments?)","judge"],
["judiciary","judicial"],
["(un)?just"],
["(in)?justices?"],
["keep|keeps|keeping|kept"],
["key"],
["kill(s|ed|ing|er|ers)?"],
["kind(a|s|er|est)?"],
["know(s|n|ed|ing|ledge)?"],
["labou?r(s|ed|ing|ious)?","labor"],
["land(s|ed|ing|ings)?"],
["las"],
["last"],
["late(r|st|ly)?"],
["laws?"],
["lay|lays|laid|laying|layers?"],
["lead.*"],
["learn.*"],
["least"],
["leav(e|es|ing)"],
["led"],
["left"],
["legs?"],
["legislat.*","legislate"],
["less"],
["lets?"],
["lift(s|ed|ing)?"],
["liberat.*","liberate"],
["lie"],
["lied"],
["lies"],
["life*"],
["light.*"],
["like.*"],
["line"],
["link"],
["linked"],
["links"],
["linking"],
["list"],
["listed"],
["listen"],
["listener"],
["listening"],
["listing"],
["lists"],
["little"],
["liv(e|ed|es|ing)"],
["lmao"],
["lol"],
["long|longer|longest"],
["look|looks|looked|looking"],
["loose(r|st|n.*)?"],
["los"],
["loser?s?"],
["losing"],
["loss"],
["losses"],
["lost"],
["lots?"],
["loved?r?s?|loving"],
["low(er|est|s)?"],
["luv"],
["lying?"],
["mad"],
["made"],
["main"],
["mais"],
["make|makes|making"],
["man"],
["manners?"],
["many"],
["may"],
["maybe"],
["mean|means|meant|meaning|meanings"],
["member(ship)?s?","member"],
["medium","media"],
["men"],
["met"],
["meet(ing)?s?"],
["messaged?s?|messaging"],
["might"],
["mind"],
["mine"],
["minister.*","minister"],
["miss(es|ed|ing)?"],
["mone(y|tary)","money"],
["months?(ly)?"],
["more"],
["moron.*"],
["mornings?"],
["most"],
["move.*"],
["mtgs?"],
["myself"],
["much"],
["must"],
["name[sd]?"],
["nations|national(ly)?|natl","nation"],
["natural(ly)?"],
["nature"],
["near(by|ly)"],
["(un)?necessar(il)?y"],
["needs?(ed)?(ing)?"],
["negotiat.*","negotiate"],
["neither"],
["never"],
["new(er|est)?"],
["news"],
["next"],
["nigg(a|er)s?"],
["night"],
["nite"],
["no(body|ne|pe|t|thing)"],
["nor"],
["nos"],
["now"],
["object.*","object"],
["off"],
["offices","office"],
["officers","officer"],
["official.*"],
["often"],
["old"],
["older"],
["oldest"],
["omg"],
["one"],
["online"],
["once"],
["only"],
["open"],
["oppo[ns].*"],
["others?"],
["ours?"],
["out"],
["over(age|ly)?"],
["ow(es|ed|ing)"],
["own(s|ed|ing|ers?|erships?)","own"],
["paid"],
["parts?"],
["para"],
["pass(es|ed|ing)?"],
["past"],
["patriot.+","patriot"],
["pay(ment)s?"],
["peep.*"],
["people"],
["per"],
["person(s|al|ally)?"],
["photos?"],
["pics?"],
["pick.*"],
["pictures?"],
["piss.*"],
["plac(e|es|ed|ing)?"],
["plan(s|ned|ning)?"],
["please"],
["poll.+","poll"],
["policy"],
["political(ly)?"],
["politics"],
["poor"],
["por"],
["(un)?popula(r|rly|rity)"],
["posts?"],
["power(s|ful|fully|ed|ing)?"],
["prescri(b|pt).*","prescribe"],
["present.+","present"],
["president.+","president"],
["pretty"],
["prevent.*"],
["pro"],
["(im)?probabl[ey]"],
["problem.*"],
["proceed.*","proceed"],
["program.*"],
["promis.*"],
["(im)?proper(ly)?"],
["propos(es|ed|ing|als?)","propose"],
["(un)?protect(s|ed|ing|ion|ers?|ors?)?","protect"],
["protest(s|ed|ing|er|ers)","protest"],
["prov(e|es|ed|ing)"],
["provid(e|es|ed|ing)"],
["proximo"],
["public"],
["publish.*","publish"],
["pull(ed|s|ing)?"],
["punish.*","punish"],
["push(ed|es|ing)?"],
["put"],
["putting"],
["(un|dis)?qualif(y|ies|ied|ying|ications?)"],
["que"],
["question(ed|s|ing)?"],
["quien"],
["quick(ly)?"],
["rain"],
["raining"],
["raise"],
["rally"],
["ran"],
["reach.*"],
["read"],
["reading"],
["reads"],
["ready"],
["real"],
["reality"],
["really"],
["reasons?"],
["receiv(e.*|ing)"],
["recent"],
["recommend.*"],
["record(s|ed|ing)?"],
["regarding"],
["refus.*","refuse"],
["(ir|un)?regul.*","regular"],
["reject.*"],
["releas.*"],
["relocat.*"],
["remain.*"],
["remember.*"],
["remov.*"],
["(ir)?replac.*"],
["report(s|ed|ing)?"],
["represent(s|ed|ing|ation)?"],
["representatives","representative"],
["resign.*","resign"],
["respon(d.*|s.*)","respond"],
["(ir|dis)?respect.+","respect"],
["rest"],
["retire.+","retire"],
["retiring","retire"],
["revers.+","reverse"],
["right"],
["rise"],
["risen"],
["rising"],
["risk.*"],
["road"],
["roads"],
["roll"],
["rolled"],
["rolling"],
["rolls"],
["rts"],
["rule"],
["ruled"],
["rules"],
["ruling"],
["rulings"],
["run"],
["running"],
["sad"],
["safe(ly|ty)","safe"],
["same"],
["sav(e|es|ed|ing|ings)"],
["saw"],
["sa(y|ys|ying|id)"],
["scandal.*","scandal"],
["school(s|ed|ing)?","school"],
["search.+"],
["sea"],
["seat(s|ed|ing)?"],
["seconds?"],
["secur(e|es|ed|ing|ely|ity|ities)","secure"],
["seek(s|ing)"],
["seem(s|ed|ing)?"],
["see(s|ing|n)?"],
["sen(ator)?s?","senator"],
["send"],
["sends"],
["sending"],
["sense"],
["sent"],
["ser(a|as)?"],
["serv(e|es|ed|ing|ices?|itudes?)"],
["sets?"],
["several"],
["shall"],
["shar(e|es|ed|ing|ethis)"],
["she"],
["shit(s|ted|ting)?"],
["shoot"],
["shot"],
["should"],
["shout(s|ed|ing)?"],
["show(s|ed|ing)?"],
["shut"],
["sick"],
["sides?"],
["sign"],
["simpl(e|y|er|est)"],
["since"],
["single"],
["site"],
["sites"],
["six"],
["skips?"],
["smell.*"],
["solutions?"],
["solv(e|es|ed|ing)"],
["some.*"],
["soon"],
["sorry"],
["sources?"],
["spam(s|med|ming)?"],
["speak.*"],
["special"],
["specially"],
["spend"],
["spending"],
["spends"],
["spent"],
["spoke"],
["stand"],
["stands"],
["start"],
["starting"],
["starts"],
["stat(e|ed|es|ing)"],
["statements?"],
["stay"],
["stays"],
["step"],
["steps"],
["stfu"],
["still"],
["stop"],
["story"],
["straight"],
["strength.*"],
["strong"],
["strongly"],
["studie[sd]"],
["study"],
["stuff"],
["stupid.*"],
["such"],
["suck.*"],
["suggest.*"],
["support.*"],
["suppos(e|es|ed|ing)"],
["switch(es|ed|ing)?"],
["sure"],
["systems?"],
["talk(s|ed|ing)?"],
["tak(e|es|en|ing)"],
["tax(es|ed|ing|ation|ations)?","tax"],
["teams?"],
["tells?"],
["test(s|ed|ing)?"],
["testif(y|ies|ied|ying)"],
["than"],
["thank(s|ed|ing|less)?","thank"],
["that(\Ws)?"],
["the"],
["theirs?"],
["them(selves)?"],
["then"],
["there(\Ws|of)?"],
["these"],
["they"],
["they\W.*"],
["those"],
["thin"],
["things?"],
["think(s|ing)?"],
["this"],
["tho"],
["thou"],
["though"],
["thoughts?"],
["threes?|thirds?|thirty"],
["through"],
["throughout"],
["thr(ow|ows|owing|ew)"],
["thru"],
["thx"],
["ties?"],
["tim(e|es|ed|ing)"],
["tir(e|es|ed|ing)"],
["today"],
["todos"],
["told"],
["tomorrows?"],
["tonight"],
["tonite"],
["too"],
["took"],
["tools?"],
["top"],
["topped"],
["tops"],
["totals?"],
["touch(es|ed|es|ing)?"],
["touts?"],
["towards?"],
["tr(y|ied|ies|ials?|ying)"],
["transition.*","transition"],
["treasonous|traitor|traitors|traitorous","treason"],
["treaties","treaty"],
["troops"],
["true"],
["trust(s|ed|ing|ful|ful|fully)","trust"],
["(un)?truth(s|ful|fully)?"],
["tua"],
["turn(s|ed|ing)?"],
["tweets?"],
["two"],
["un(do|done|did)"],
["unexpected(ly)"],
["unless"],
["under"],
["underneath"],
["understand.*"],
["union.+","union"],
["unit(e|es|ed|ing|y)","unite"],
["unseat.*"],
["until"],
["unusual"],
["updat.*"],
["upper"],
["urgen(cy|t|tly)"],
["us(e|ed|es|ing)"],
["untrue"],
["vacan(t|cy|cies)","vacant"],
["valu(e|es|ed|ing)"],
["vast"],
["very"],
["vest(s|ed|ing)?","vest"],
["via"],
["victor(s|y|ies|ious)?","victory"],
["videos?"],
["view(s|ed|ing|ings)"],
["visit(s|ed|ing)?"],
["vital"],
["vot(es|ed|ing|er|ers)","vote"],
["wait(s|ed|ing)?"],
["want(s|ed|ing)?"],
["war(s|red|ring)?","war"],
["warm(s|ed|ing|er|est)?"],
["warn(s|ed|ing)?"],
["was"],
["watch(es|ed|ing|er|ers)"],
["ways?"],
["we\W.*"],
["weak(en|ens|ened|ening|er|est)?"],
["weeks?"],
["(un)?welcome(s|ed|ing)?"],
["well"],
["went"],
["were"],
["what(so)?(ever)?"],
["when(ever)?"],
["where(of)?"],
["which"],
["while"],
["who"],
["whole"],
["whose"],
["why"],
["will"],
["win"],
["wingnuts?"],
["winning"],
["wins"],
["with(in|out)?"],
["woman"],
["women"],
["won"],
["word(s|y)?"],
["work.*"],
["worlds?"],
["worse"],
["worst"],
["worthy?"],
["wow"],
["would"],
["write"],
["written"],
["wrong(ly)?"],
["wrote"],
["www"],
["yeah"],
["yell.*"],
["yes"],
["yesterday"],
["yet"],
["year(s|ly)?"],
["you"],
["you\W.+"],
["yours?"],
["yoursel(f|ves)"],
["yrs"]

		],

		mapToObject: function(pTransform) {
			return { 
				exp : new RegExp('^('+pTransform[0]+')$'), 
				replacement : pTransform[1] ? pTransform[1] : '',
				queryterm : pTransform[2] ? pTransform[2] : pTransform[0]
			}; 
		} 

	//TODO Allow for injection of custom transforms.
	//TODO for (var i in custom transform) {
	//TODO 	returnValue.push(mapToObject(custom transform[i]));
	//TODO );

	}
	
} //function()
