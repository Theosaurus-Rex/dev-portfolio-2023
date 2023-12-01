---
title: ElixirConf 2022 - That's a Wrap!
description: Baby's first developer conference.
date: "2022/09/09"
imageUrl: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

If you've been following my sporadic twitter posts as I continue building my skills as a developer, you'll know that I was incredibly fortunate to be accepted as a speaker at this year's ElixirConf in Aurora, Colorado. For the last week, I (along with fellow Alembians [Josh Price](https://twitter.com/joshprice) and [Zach Daniel](https://twitter.com/ZachSDaniel1)) have had the privilege of hanging out in the United States with some of the most talented people I have ever met, all of whom are present and vocal members of the Elixir community.

If you know me personally, you'll also know that this was a super special trip for me, as it was not only my first time speaking at a conference, but also, my first trip outside my home country of Australia! Despite lots of travel-related hijinks that left me a little worse for wear, I'd do it all again if it meant meeting so many amazing, talented, wonderful programmers.

It was an incredibly jam-packed three days for myself and my colleagues, in between running our Alembic sponsor booth, sharing everything going on with the Ash framework, presenting my talk to the community and soaking up the knowledge of many, many incredible speakers. The community is continually innovating in the Elixir ecosystem, as displayed by some of the presentations shared at the conference:

- [Brooklin Myers](https://twitter.com/BrooklinJMyers) from [Dockyard](https://dockyard.com/) has been hard at work building the curriculum for [Dockyard Academy](https://academy.dockyard.com/), a bootcamp designed to train developers to fill the increasing number of Elixir developer roles. The entire twelve-week curriculum is [available on GitHub](https://github.com/DockYard-Academy) for early review - and the whole thing is created by utilising LiveBook to create an interactive learning experience that makes devs get their hands dirty. As discussed in his talk, Brooklin has utilised smart cells to ensure a friendlier and more accessible user experience for students taking the online course, providing widgets that allow for easier navigation through course materials.
- [Chris Grainger](https://twitter.com/cigrainger) is making strides in the machine learning side of the Elixir community with his company, [Amplified](https://www.amplified.ai/). By utilising machine learning and training a model to find specific patterns in text, Chris has created a platform that allows for incredibly complex queries to be run on Amplified's database of patents. By giving users incredibly granular control over queries to the database, Amplified allows for finding specific words and phrases in the text contained within patents to minimise the amount of manual reading needed when a patent applicant is researching potential conflicts.
- [Tyler Young](https://twitter.com/TylerAYoung) took the floor to show the community how the team at [Felt](https://felt.com/) handled multiple people making edits simultaneously in their map editor. As Elixir’s ecosystem evolves, it will be fascinating to see more and more use cases for multiplayer editing, and how interfaces for such complex interactions will be handled.

These are just some of the highlights from the talks I was able to watch in-between discussions with fellow developers and hanging out at the Alembic booth giving out stickers. It was fantastic to see many speakers from different specialisations and at different levels of seniority and experience share their knowledge and learning with the rest of the community, and notably, it was fascinating to see the sheer variety of different use cases in which Elixir is being utilised by individuals and organisations alike.

Of course, no ElixirConf would be complete without its keynotes, and the core teams behind the ecosystem’s technologies and frameworks absolutely delivered.

### Opening Keynote - José Valim

Apart from the updates announced for Elixir 1.14 released as part of [the changelog](https://github.com/elixir-lang/elixir/blob/v1.14/CHANGELOG.md), José spoke at length about the next steps for Elixir:

- The core team is aiming to continue releasing updates every 6 to 9 months, focusing on smaller improvements and optimisations. He mentioned that this cycle allows the team enough breathing room to experiment with new ideas in preparation for larger updates to the language.
- Three key areas of focus were pointed out for the future of Elixir - set-theoretic types (which he covered at length in [his ElixirConf EU 2022 Keynote](https://www.youtube.com/watch?v=Jf5Hsa1KOc8)), developer and learning experience, and machine learning.
- José is adamantly championing [Livebook](https://livebook.dev/) as a tool for learning the language and teaching aspiring alchemists. In particular, he spoke about the breadth of possibilities for visualising aspects of Livebook using [Kino](https://github.com/livebook-dev/kino), such as charts, graphs, and mermaid diagrams. As mentioned previously, Dockyard Academy is taking this approach with their bootcamp curriculum, and is using this suite of visualisation tools alongside smart cells to lower the barrier to entry for new developers.
- Machine learning is rapidly expanding within the Elixir ecosystem, with tools such as [Nx](https://github.com/elixir-nx/nx), [Axon](https://github.com/elixir-nx/axon), and [Explorer](https://github.com/elixir-nx/explorer) being used both by individuals and companies such as Amplified, as mentioned above.

It’s fantastic to see the focus on developer and learning experience in particular, as more and more Elixir positions are opening and developers are joining the community.

### Closing Keynote - Chris McCord

Despite some disruptive technical difficulties around laptops and screen sharing, Chris delivered some news that delighted users of Phoenix and LiveView across the board:

- We’re getting a nifty new feature, `Phoenix.VerifiedRoutes`, as a replacement for the (currently very verbose) route helper methods. They’re a sigil-based string that, at compile time, is dispatched against the router and throws a warning if no match is found. This also works with nesting, turning this:
  ```elixir
   resources "/posts", PostController do
  		resources "/comments", CommentController
   end
   > Routes.post_comment_path(@conn, :show, @post, @comment)
  ```
  Into this:
  ```elixir
  ~p"/posts/#{@post.id}/comments/#{@comment.id}"
  ```
  To paraphrase Chris, we now get to sprinkle strings everywhere, but in a way that “doesn’t suck”.
- LiveView is getting declarative assigns and slots that help provide some quality of life improvements at compile time. Notably, we can now add docs in our declaration:
  ```elixir
  attr :row_id, :any, default: nil, doc: "the function compute each tr id"
  attr :rest, :global, doc: "arbitrary HTML attrs to apply to the tbody"
  ```
  This means that [mix.docs](http://mix.docs) can now pull these into the documentation in a human-readable way.
- Previously, we had to use the `assigns_to_attributes` function to allow users to pass in arbitrary assigns, like so:

  ```elixir
  def icon(assigns) do
  	assigns =
  		assigns
  		|> assign_new(:outlined, fn -> false end)
  		|> assign_new(:class, fn -> "w-4 h-4 inline-block" end)

  ~H"""
  <Hero.icon
  	name={@name}
  	outlined={@outlined}
  	className={@class}
  	{assigns_to_attributes(assigns)}
  />
  """
  ```

  But now, with the use of a `:global` attribute, we can write the same component like so:

  ```elixir
  attr :name, :atom, required: true
  attr :outlined, :boolean, default: false
  attr :rest, :global, default: %{class: "w-4 h-4 inline-block"}

  def icon(assigns) do
  	~H"""
  	<Hero.icon
  		name={@name}
  		outlined={@outlined}
  		{@rest}
  	/>
  	"""
  end
  ```

- A HEEx formatter is here in the form of a mix formatter plugin, thanks to [Felipe Renan](https://github.com/feliperenan). This is a huge quality of life improvement and people were cheering at this announcement!
- The authentication system in Phoenix has had live generation added with `phx.gen.auth -live`, thanks to [Berenice Medel](https://github.com/bemesa21) from the Phoenix core team. By creating auth flows with LiveView, we can create richer experiences for users when logging in or signing up, with niceties such as real time form feedback creating a better user experience. Additionally, all of the newly generated code with this flag is fully tested.
- Phoenix 1.7 will include Tailwind by default when creating a new app - no flag needed. Chris was careful to point out that this can be removed with minimal effort if devs don’t want to use it in their app, but also pointed out how Tailwind pairs incredibly well with Phoenix’s component system. Additionally, the new landing page generated with a new app is designed by the team at Tailwind, and includes resources to help users who are new to using Tailwind in their apps.
- LiveView 0.18 is very accessibility-focused, and is releasing with a new function component, `<.focus_wrap>`. This is useful for maintaining focus events to stay within a modal when the user has one open, rather than tabbing through fields and ending up somewhere outside of the modal while it is still open. This is included with the new out of the box components being brought to Phoenix, so that a certain level of accessibility is baked into the code generated with `phx.gen.auth`.

Chris wrapped up by sharing the Roadmap of future features, including:

- Integration with [Christian Blavier’s Phoenix Storybook project](https://github.com/phenixdigital/phx_live_storybook)
- Unified LiveView/LiveComponent messaging
- Improved `Phoenix.Form` API
- Function component template files
- A `<.layout>` function component

### A great time to be using Elixir

Ultimately, this year’s ElixirConf showed just how much developers and companies are benefitting from the “Elixir advantage” - teams are building things faster, cheaper and with less people than before. Elixir’s use cases are growing even broader, especially with renewed focus on the machine learning tools and libraries within the ecosystem and the business value that they can bring. With core project teams working hard to make Elixir and its frameworks even more robust and delightful to use, the future of this language and its community is looking brighter than ever.

Want to enjoy the Elixir advantage on your next project? [Get in touch with us at Alembic](https://alembic.com.au/contact).
