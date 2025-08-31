import java.util.*;
public class Switch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        sc.nextLine();
        int b = sc.nextInt();
        System.out.println("TYPE");
        String n = sc.next();
        switch (n) {
            case ("+"):
                    System.out.println("Addition \n"+ (a+b));
                break;
            case ("-"):
                    System.out.println("sub \n"+ (a-b));
                break;
            case ("*"):
                    System.out.println("multiplication\n"+ (a*b));
                break;
            case ("/"):
                    System.out.println("quotient \n"+ (a/b));
                break;
            case ("%"):
                    System.out.println("reminder \n"+ (a%b));
                break;
            default:
                break;
        }
    }
}