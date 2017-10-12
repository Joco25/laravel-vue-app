<div >
    <ul>
        @foreach ($projects as $project)
        <li>{{$project->name}} says: {{$project->description}}</li>
        @endforeach
    </ul>
</div>