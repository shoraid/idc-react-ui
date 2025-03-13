import Input from "./components/forms/Input";
import Label from "./components/typography/Label";

function App() {
  return (
    <div className="space-y-6 px-8 py-4">
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
          vitae corporis minus voluptatibus voluptatum tempora illo labore,
          nobis iste eius quod at autem, unde ipsa. Necessitatibus dolorum at
          porro tenetur?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
          reprehenderit totam natus aliquid quas expedita vero similique
          possimus maiores modi quasi, est distinctio? Iusto in laboriosam
          expedita? Corrupti, nisi sunt.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          ab molestiae non sit! Ducimus autem fugit eligendi quas labore, at
          sapiente earum aspernatur doloremque, eius magnam placeat pariatur
          tenetur soluta.
        </p>
      </div>
      <div className="space-y-1.5">
        <Label required>Full Name</Label>
        <Input name="full_name" />
      </div>

      <div className="space-y-1.5">
        <Label required>Email</Label>
        <Input name="email" />
      </div>

      <div className="space-y-1.5">
        <Label required>Phone Number</Label>
        <Input name="phoneNumber" />
      </div>

      <div className="space-y-1.5">
        <Label required>Password</Label>
        <Input name="password" />
      </div>
    </div>
  );
}

export default App;
