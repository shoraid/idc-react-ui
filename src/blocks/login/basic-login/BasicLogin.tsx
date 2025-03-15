import Input from "@/components/forms/Input";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";
import Button from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/cards";

const BasicLogin = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4 md:items-baseline md:pt-[7%] dark:bg-gray-950">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <span className="text-xl font-bold">Login</span>
          </CardHeader>
          <CardBody className="sm:px-8">
            <form>
              <div className="space-y-6 pb-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email" size="sm">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    autoComplete="email"
                    size="sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="password" size="sm">
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    size="sm"
                  />
                  <div className="text-right">
                    <Text
                      variant="link"
                      size="sm"
                      className="underline underline-offset-4"
                    >
                      Forgot Pasword?
                    </Text>
                  </div>
                </div>

                <Button color="primary" className="w-full">
                  Login
                </Button>

                <div className="text-center">
                  Don't have an account?{" "}
                  <Text
                    variant="link"
                    size="sm"
                    className="underline underline-offset-4"
                  >
                    Sign Up
                  </Text>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default BasicLogin;
